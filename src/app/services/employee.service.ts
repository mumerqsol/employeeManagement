import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import baseUrl from './helper';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit {

  constructor(private http:HttpClient,private user:UserService ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  addEmployee(employee:any)
  {
    console.log(employee);
    
    return this.http.post(`${baseUrl}/api/EmployeeMaster`,employee,{
      params: new HttpParams().set('auth',this.user.getToken("access_token") as string)
      
    });
  }

  getEmployeeList()
  {
    return this.http.get(`${baseUrl}/api/employee`,{
      params: new HttpParams().set('auth',this.user.getToken("access_token") as string)
      
    });
  }

  getemployee(val:number)
  {
    return this.http.get(`${baseUrl}/api/EmployeeMaster/${val}/details`,{
      params : new HttpParams().set('auth',this.user.getToken('access_token') as string)
    });
  }

  addEmpDesig(empdesignation:any)
  {
    return this.http.post(`${baseUrl}/api/empdesignation`,empdesignation,{
      params: new HttpParams().set('auth',this.user.getToken('access_token') as string)
    });

  }

}
