import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  outputs: ['formlabel']
})
export class SidenavComponent {

  @Input() sideNavStatus: boolean = false;
  formlabel = new EventEmitter();
  List: any;

  constructor(private menuService: MenuService) {

    //Get All Menus
    this.menuService.getAllMenu().subscribe((data) => {

      this.List = data;

    }, (error) => {
      console.log(error);
    })

  }

  getFormLabel(value: any) {
    this.menuService.setCurrentForm(value);
    this.formlabel.emit(value);
  }

}
