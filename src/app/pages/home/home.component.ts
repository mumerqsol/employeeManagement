import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';
import { EmplistComponent } from '../Hiring/emplist/emplist.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  formlabel: any = "";
  componentRef: any;
  constructor(private userService: UserService, private menuService: MenuService) {

    this.userService.loadCurrentUser();

    let CurrentForm = this.menuService.getCurrentForm();
    this.formlabel = CurrentForm ? JSON.parse(CurrentForm).formname : "";

  }

  getFormLabel(obj: any) {

    let CurrentForm = this.menuService.getCurrentForm();
    this.formlabel = CurrentForm ? JSON.parse(CurrentForm).formname : "";

  }

  sideNavStatus: boolean = false;
  menuStatus: boolean = false;

}
