import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentComponent } from './department/department.component';
import { DeveloperComponent } from './developer/developer.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent},
  { path: 'department', component: DepartmentComponent },
  { path: 'profile/:id', component: EmployeeProfileComponent },
  { path: 'departmentDetails/:id', component: DepartmentDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
