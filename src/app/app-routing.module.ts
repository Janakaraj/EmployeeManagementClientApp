import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
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
import { AdminGuard } from './userAuth/guards/admin.guard';
import { AuthGuard } from './userAuth/guards/auth.guard';
import { EmployeeGuard } from './userAuth/guards/employee.guard';
import { HrGuard } from './userAuth/guards/hr.guard';
import { LoginComponent } from './userAuth/login/login.component';
import { LogoutComponent } from './userAuth/logout/logout.component';
import { ResetPasswordComponent } from './userAuth/reset-password/reset-password.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent,canActivate: [AuthGuard, EmployeeGuard]},
  { path: 'addEmployee', component:EmployeeAddComponent,canActivate: [AuthGuard, HrGuard]},
  { path: 'editEmployee/:id', component:EmployeeEditComponent,canActivate: [AuthGuard, EmployeeGuard]},
  { path: 'removeEmployee/:id', component:EmployeeRemoveComponent,canActivate: [AuthGuard, HrGuard]},
  { path: 'profile/:id', component: EmployeeProfileComponent,canActivate: [AuthGuard, EmployeeGuard]},
  { path: 'department', component: DepartmentComponent,canActivate: [AuthGuard, HrGuard]},
  { path: 'addDepartment', component:DepartmentAddComponent, canActivate: [AuthGuard,AdminGuard]},
  { path: 'editDepartment/:id', component: DepartmentEditComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'removeDepartment/:id', component: DepartmentRemoveComponent , canActivate: [AuthGuard, AdminGuard]},
  { path: 'departmentDetails/:id', component: DepartmentDetailsComponent, canActivate: [AuthGuard, HrGuard]},
  { path: 'login', component:LoginComponent},
  { path: 'logout', component:LogoutComponent},
  { path: 'forgotPassword', component:ForgotPasswordComponent},
  { path: 'resetPassword', component:ResetPasswordComponent},
  { path: 'accessDenied', component: AccessDeniedComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
