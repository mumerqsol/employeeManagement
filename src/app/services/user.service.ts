import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currenUser = new BehaviorSubject<any>(null);

  jwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient) { }

  // add User

  public addEditUser(user: any) {
    return this.http.post(`${baseUrl}/api/User/`, user,{
      params : new HttpParams().set('auth',this.getToken("access_token") as string)
    });

  }

  public loginUser(user: any) {
    console.log(user);
    var val = {

      "userid": "umer",
      "password": "123",

    }
    console.log(val);
    return this.http.post(`${baseUrl}/api/User/userlogin/`, user);
  }
 

  getToken(token_key:string)
  {
    let tokenStr = localStorage.getItem(token_key);
    return tokenStr;
   
  }

  loadCurrentUser()
  {


    let token = this.getToken("access_token");
    let UserInfo = token != null ? this.jwtHelperService.decodeToken(token) : null;

     let data = UserInfo ? {

        id: UserInfo.id,
        userid: UserInfo.userid,
        usertype: UserInfo.usertypeid,
        username: UserInfo.username,
        iisactive: UserInfo.isactive,

     } : null;

     this.currenUser.next(data);

  }
  setToken(token:string)
  {
    localStorage.setItem("access_token", token);
    this.loadCurrentUser();
  }

  isLoggedIn() :boolean {
    return localStorage.getItem("access_token") ? true : false;

  }

  Logout() {

    localStorage.removeItem("access_token");

  }


}
