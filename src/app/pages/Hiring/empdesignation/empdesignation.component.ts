import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DesignationService } from 'src/app/services/designation.service';

@Component({
  selector: 'app-empdesignation',
  templateUrl: './empdesignation.component.html',
  styleUrls: ['./empdesignation.component.css']
})
export class EmpdesignationComponent implements OnInit {
  constructor (private desigService:DesignationService){

  }
  ngOnInit(): void {
    
  }






  

}
