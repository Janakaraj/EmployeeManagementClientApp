import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent},
  { path: 'addEmployee', component:EmployeeAddComponent},
  { path: 'editEmployee/:id', component:EmployeeEditComponent},
  { path: 'removeEmployee/:id', component:EmployeeRemoveComponent},
  { path: 'profile/:id', component: EmployeeProfileComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'addDepartment', component:DepartmentAddComponent},
  { path: 'editDepartment/:id', component: DepartmentEditComponent },
  { path: 'removeDepartment/:id', component: DepartmentRemoveComponent },
  { path: 'departmentDetails/:id', component: DepartmentDetailsComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
