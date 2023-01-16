import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/account/login/login.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { EmpmasterComponent } from './pages/Hiring/empmaster/empmaster.component';
import { DesignationComponent } from './pages/Hiring/designation/designation.component';
import { EmpdesignationComponent } from './pages/Hiring/empdesignation/empdesignation.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
import { EmplistComponent } from './pages/Hiring/emplist/emplist.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    SidenavComponent,
    HomeComponent,
    EmpmasterComponent,
    DesignationComponent,
    EmpdesignationComponent,
    DasboardComponent,
    EmplistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgxPaginationModule
  ],

  
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
   
    }
  ],
  entryComponents: [EmplistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
