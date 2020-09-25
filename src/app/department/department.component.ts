import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from './department.model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  errorMessage: string;

  constructor(private departmentService: DepartmentService) { }
  departments: Array<Department>;
  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe(e => {
      this.departments = e;
    },
      error => this.errorMessage = <any>error);
  }
}

