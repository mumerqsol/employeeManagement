import { Component
         ,ViewChild
         ,ComponentRef
         ,ViewContainerRef
         ,ComponentFactoryResolver
         ,ComponentFactory
        } from '@angular/core';
import { EmplistComponent } from './pages/Hiring/emplist/emplist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmpManagementPortal';
  constructor(private resovler:ComponentFactoryResolver){

  }

}
