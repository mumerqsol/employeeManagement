
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }


  loginForm = new FormGroup({


    userid: new FormControl("", [Validators.required
      , Validators.minLength(2)
      , Validators.pattern('[a-zA-z].*')]),

    usertypeid: new FormControl("0"),

    username: new FormControl("0"),

    password: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),

    cnfpassword: new FormControl(""),
    isactive: new FormControl(false),

  });


  ngOnInit(): void {
  }

  formSubmit() {
    let val = this.loginForm.value;
    this.userService.loginUser(val).subscribe(
      (data) => {
        this.userService.setToken(data.toString());
        this.router.navigateByUrl("/home/dashboard");
      }, (error) => {
        console.log(error);
      }
    )

  }
}
