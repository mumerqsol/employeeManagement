import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { skipWhile, take, window } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document: Document, private userService: UserService, private router: Router) { }



  @Output() statusValue = new EventEmitter<boolean>();
  userid: string = "";
  isLoggedIn: boolean = this.userService.isLoggedIn();

  ngOnInit(): void {

    this.userService.currenUser.subscribe(res => this.userid = res.userid);
  }

  Logout() {
    this.userService.Logout();
    document.defaultView?.location.reload();
    this.router.navigateByUrl("/login");

  }


  menuStatus: boolean = false;

  SideNavToggle() {

    this.menuStatus = !this.menuStatus;
    this.statusValue.emit(this.menuStatus);

  }

}
