import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeRemoveComponent } from './employee/employee-remove/employee-remove.component';
import { DepartmentRemoveComponent } from './department/department-remove/department-remove.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { LoginComponent } from './userAuth/login/login.component';
import { LogoutComponent } from './userAuth/logout/logout.component';
import { ForgotPasswordComponent } from './userAuth/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './userAuth/reset-password/reset-password.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeComponent,
    DepartmentComponent,
    EmployeeProfileComponent,
    DepartmentDetailsComponent,
    EmployeeAddComponent,
    DepartmentAddComponent,
    EmployeeEditComponent,
    EmployeeRemoveComponent,
    DepartmentRemoveComponent,
    DepartmentEditComponent,
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
