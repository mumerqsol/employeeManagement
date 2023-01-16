import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  outputs: ['employeeModel']
})
export class EmplistComponent {

  employeList: any;
  p: number = 1;

  page: number = 1;
  count: number = 0;
  tableize: number = 10;
  tableizes: any = [5, 10, 15, 20];

  employee: any;
  constructor(private empService: EmployeeService, private router: Router) {

    this.getEmloyeeList();

  }

  getEmployee(id: number) {

    this.router.navigateByUrl(`/home/addempmaster/${id}`);
  }

  addNewEmployee() {
    this.router.navigateByUrl(`/home/addempmaster/${0}`);
  }



  getEmloyeeList() {
    this.empService.getEmployeeList().subscribe((data) => {

      console.log(data);
      this.employeList = data;

    }, (error) => {
      console.log(error);

    });

  }

  onTableDataChange(event: any) {

    this.page = event;
    this.getEmloyeeList();
  }


  onTableSizeChange(event: any) {
    this.tableize = event.target.value;
    this.page = 1;
    this.getEmloyeeList();
  }


}
