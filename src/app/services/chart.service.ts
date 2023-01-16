import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor(private http:HttpClient,private userSerive:UserService) { 

  }

   getChartData(){
   return this.http.get(`${baseUrl}/api/EmpChart/chartlist`,{
     params: new HttpParams().set('auth',this.userSerive.getToken('access_token') as string)
    });
   }

  }