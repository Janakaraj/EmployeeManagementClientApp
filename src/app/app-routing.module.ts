import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentEditComponent } from './department/department-edit/department-edit.component';
import { DepartmentRemoveComponent } from './department/department-remove/department-remove.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeRemoveComponent } from './employee/employee-remove/employee-remove.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './userAuth/forgot-password/forgot-password.component';
import { LoginComponent } from './userAuth/login/login.component';
import { LogoutComponent } from './userAuth/logout/logout.component';
import { ResetPasswordComponent } from './userAuth/reset-password/reset-password.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent},
  { path: 'addEmployee', component:EmployeeAddComponent},
  { path: 'editEmployee/:id', component:EmployeeEditComponent},
  { path: 'removeEmployee/:id', component:EmployeeRemoveComponent},
  { path: 'profile/:id', component: EmployeeProfileComponent },
  { path: 'department', component: DepartmentComponent,canActivate: [AuthGuard] },
  { path: 'addDepartment', component:DepartmentAddComponent},
  { path: 'editDepartment/:id', component: DepartmentEditComponent },
  { path: 'removeDepartment/:id', component: DepartmentRemoveComponent },
  { path: 'departmentDetails/:id', component: DepartmentDetailsComponent },
  { path: 'login', component:LoginComponent},
  { path: 'logout', component:LogoutComponent},
  { path: 'forgotPassword', component:ForgotPasswordComponent},
  { path: 'resetPassword', component:ResetPasswordComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
