import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/department/department.model';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  employee: Employee = {
    id: 0,
    email: null,
    name: null,
    surname: null,
    address: null,
    qualification: null,
    contactNumber: null,
    departmentId: null,
    department: null
  };
  departments: Array<Department>;
  constructor(private employeeService: EmployeeService, private route: Router, private deptService:DepartmentService) { }

  ngOnInit(): void {
    this.deptService.getDepartments().subscribe(e=>{
      this.departments=e;
    });
  }
  add(): void {
    this.employeeService.addEmployee(this.employee);
     this.route.navigate(['/employee']).then(() => {
       window.location.reload();
    });
  }
}
