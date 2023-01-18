import { DatePipe, formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { zip } from 'rxjs';
import { DesignationService } from 'src/app/services/designation.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-empmaster',
  templateUrl: './empmaster.component.html',
  styleUrls: ['./empmaster.component.css']

})
export class EmpmasterComponent implements OnInit {
  allDesignation: any;
  dateformat: Date = new Date();
  model: any;
  jod:Date= new Date();

  constructor(private desigService: DesignationService,
    private empService: EmployeeService,
    private activatedRouter: ActivatedRoute,
    private router: Router) {

  }



  empForm = new FormGroup({


    empid: new FormControl("0"),
    empname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.pattern('[a-zA-Z].*')]),
    dob: new FormControl(formatDate(new Date().toDateString(), 'dd-MMM-yyyy', 'en'), [Validators.required]),
    jod: new FormControl(formatDate(new Date().toDateString(), 'dd-MMM-yyyy', 'en'), [Validators.required]),
    cnfmdate: new FormControl(formatDate(new Date().toDateString(), "yyyy-MM-dd", "en"), [Validators.required]),
    nicno: new FormControl("", [Validators.required, Validators.minLength(11), Validators.pattern('[0-9]')]),
    isactive: new FormControl("", [Validators.required]),
    imagepath: new FormControl(""),
    empDesignation: new FormGroup({
      id: new FormControl("0"),
      empid: new FormControl("0", [Validators.required]),
      desigid: new FormControl("0", [Validators.required]),
      validfrom: new FormControl(formatDate(new Date(), 'dd-MMM-yyyy', 'en'), [Validators.required]),
      validto: new FormControl(formatDate(new Date(), 'dd-MMM-yyyy', 'en'), [Validators.required]),
      isactive: new FormControl(true, [Validators.required])
    })

  });

  ngOnInit(): void {
    // Fill Designation DropDown
    this.desigService.getAllDesignation().subscribe((data) => {
      console.log("load desig");

      this.allDesignation = data;
      console.log(this.allDesignation);
    }, (error) => {
      console.log(error);
    })

    this.getEmployee();
  }

  getEmployee() {
   this.activatedRouter.params.subscribe((data:any)=>{
   this.empService.getemployee(data.id).subscribe((data:any) => {

 

      this.empForm.patchValue(data);
      this.empForm.get('jod')?.patchValue( data.jod.toString().substring(0,10));
      this.empForm.get('dob')?.patchValue( data.dob.toString().substring(0,10));
      this.empForm.get('cnfmdate')?.patchValue( data.cnfmdate.toString().substring(0,10));
      
      this.empForm.get('empDesignation.validfrom')?.patchValue( data.empDesignation.validfrom.toString().substring(0,10));
      this.empForm.get('empDesignation.validto')?.patchValue( data.empDesignation.validto.toString().substring(0,10));
    }, (error) => {
      console.log(error);

    })
   })

  }
  
  private dateFormat(date:any)
  {
    const dt = new Date(date);
    let month ='' + (dt.getMonth() +1);
    let day = '' + (dt.getDate());
    let year = '' + (dt.getFullYear());
    if (month.length < 2) month = '0'+ month ;
    if (day.length < 2) day = '0'+ day ;

    let formatdate = [month,day,year].join('/');
    console.log(formatdate);
   return formatdate;
    
  }
  EmployeeFormSubmit() {

    let empdata = this.empForm.value;
    console.log(empdata);

    this.empService.addEmployee(empdata).subscribe((data) => {

      this.empForm.patchValue(data);

    }, (error) => {
      console.log(error);

    });

  }


  empList() {

    this.router.navigateByUrl(`/home/employeelist`);
  }

  // For Employee Master
  get JOD(): FormControl {
    return this.empForm.get("jod") as FormControl;
  }
  get IsActive(): FormControl {
    return this.empForm.get("isactive") as FormControl;
  }
  get EmpName(): FormControl {
    return this.empForm.get("empname") as FormControl;
  }
  get DOB(): FormControl {
    return this.empForm.get("dob") as FormControl;
  }
  get CnfDate(): FormControl {
    return this.empForm.get("cnfmdate") as FormControl;
  }
  get NICNo(): FormControl {
    return this.empForm.get("nicno") as FormControl;
  }


  // For Employe Designation
  get DId(): FormControl {
    return this.empForm.get("empDesignation.id") as FormControl;
  }
  get DesigId(): FormControl {
    return this.empForm.get("empDesignation.desigid") as FormControl;
  }
  get EmpId(): FormControl {
    return this.empForm.get("empDesignation.empid") as FormControl;
  }
  get ValidFrom(): FormControl {
    return this.empForm.get("empDesignation.validfrom") as FormControl;
  }

  get ValidTo(): FormControl {
    return this.empForm.get("empDesignation.validto") as FormControl;
  }

  get DesigIsActive(): FormControl {
    return this.empForm.get("empDesignation.isactive") as FormControl;
  }


}
