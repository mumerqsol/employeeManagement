import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {

  submitted = false;
  cnfpwd: string = "none";
  constructor(private userService: UserService) { }
  ngOnInit(): void {

  }

  registerForm = new FormGroup({


    userid: new FormControl("", [Validators.required
      , Validators.minLength(2)
      , Validators.pattern('[a-zA-z].*')]),

    usertypeid: new FormControl("User", [Validators.required]),

    username: new FormControl("", [Validators.required
      , Validators.minLength(2)
      , Validators.pattern('[a-zA-z].*')]),

    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    cnfpassword: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    isactive: new FormControl(false, [Validators.required]),

  });




  formSubmit() {


    let val = JSON.parse(JSON.stringify(this.registerForm.value))
    console.log(val);

    if (val.password == val.cnfpassword) {
      this.userService.addEditUser(val).subscribe(
        (data) => {

          console.log(data);

        }, (error) => {

          console.log(error);
        }
      );
    }
    else {
      this.cnfpwd = "inline";

    }

  }

  get UserId(): FormControl {
    return this.registerForm.get("userid") as FormControl;
  }

  get UserName(): FormControl {
    return this.registerForm.get("username") as FormControl;
  }

  get UserType(): FormControl {
    return this.registerForm.get("usertypeid") as FormControl;
  }

  get Password(): FormControl {
    return this.registerForm.get("password") as FormControl;
  }

  get CPassword(): FormControl {
    return this.registerForm.get("cnfpassword") as FormControl;
  }

}
