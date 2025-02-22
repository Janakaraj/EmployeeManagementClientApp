import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from 'src/app/department/department.model';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  updateUserId: number = 0;
  departments:Array<Department>;
  employee: Employee = {
    id: this.updateUserId,
    email: null,
    name: null,
    surname: null,
    address: null,
    qualification: null,
    contactNumber: null,
    departmentId: null,
    department: null
  };
  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private route: Router, private deptService:DepartmentService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(e => {
      this.updateUserId = +e.get('id');
    });
    this.employeeService.getEmployee(this.updateUserId).subscribe(e => {
      this.employee = e;
    });
    this.deptService.getDepartments().subscribe(e=>{
      this.departments=e;
    });
  }

  update(): void {
    this.employeeService.updateEmployee(this.updateUserId, this.employee);
    this.route.navigate(['/employee']).then(() => {
      window.location.reload();
    });
  }
}
