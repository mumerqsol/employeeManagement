import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/account/signup/signup.component';
import { LoginComponent } from './pages/account/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { AuthGuard } from './services/auth.guard';
import { EmpmasterComponent } from './pages/Hiring/empmaster/empmaster.component';
import { DesignationComponent } from './pages/Hiring/designation/designation.component';
import { EmpdesignationComponent } from './pages/Hiring/empdesignation/empdesignation.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { EmplistComponent } from './pages/Hiring/emplist/emplist.component';

const routes: Routes = [


  {
    path: 'home',
    component : HomeComponent,
    canActivate:[AuthGuard],
    children:[

      {
        path: 'signup',
        component : SignupComponent,
        pathMatch:'full'
      },
      {
        path: 'dashboard',
        component : DasboardComponent,
        pathMatch:'full'
      },
      {
        path: 'addempmaster/:id',
        component: EmpmasterComponent,
        pathMatch:'full'
       
      },
      {
        path: 'employeelist',
        component: EmplistComponent,
        pathMatch:'full'
       
      },
      {
        path: 'empdesignation',
        component: EmpdesignationComponent,
        pathMatch:'full'
       
      }

    ],
  },
  
  {
    path: 'login',
    component : LoginComponent,
    pathMatch:'full'
  },
  {
    path: '',
    redirectTo : 'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
