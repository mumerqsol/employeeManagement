import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import baseUrl from './helper';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService  {


currentFrom = new BehaviorSubject<any>(null);

  constructor( private http:HttpClient,private userService:UserService) {

   }

   getAllMenu()
   {
      return this.http.get(`${baseUrl}/api/Menu/menujson`,{
        params : new HttpParams().set('auth',this.userService.getToken('access_token') as string)
      });

   }

   setCurrentForm(value:any){

    console.log('set form');
    console.log(value);
    localStorage.setItem('current_form',JSON.stringify (value));
    this.loadCurrentForm();
   }

   getCurrentForm(){

    let cForm = localStorage.getItem('current_form');
    let curntFrom = cForm;
    return curntFrom;
   }
   loadCurrentForm(){

    console.log('loadForm A');
    let cForm = localStorage.getItem('current_form');
    let curntFrom = cForm != null ? JSON.parse(cForm) : null;
    console.log('loadForm');

    let data = curntFrom ? {

      pid: curntFrom.pid,
      cid:curntFrom.cid,
      formname: curntFrom.formname


    }:null;
    this.currentFrom.next(data);


   }
}
