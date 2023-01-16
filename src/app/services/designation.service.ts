import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  constructor(private http: HttpClient,private userService:UserService) { }

  getAllDesignation()
  {

    return this.http.get(`${baseUrl}/api/Designation`,{
      params : new HttpParams().set('auth',this.userService.getToken("access_token") as string)
    });
  
  }
}
