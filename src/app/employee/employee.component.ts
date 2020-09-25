import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Array<Employee>;
  title = "Employee list";
  errorMessage: string;
  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployee();
  }
  loadEmployee() {
    this.empService.getEmployees().subscribe(e => {
      return this.employees = e
    },
    error => this.errorMessage = <any>error);
  }
}
