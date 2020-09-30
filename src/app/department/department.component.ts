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
  role:string = localStorage.getItem('userRole');
  isAdmin: boolean;

  constructor(private departmentService: DepartmentService) { }
  departments: Array<Department>;
  ngOnInit(): void {
    if(this.role=="Admin"){
      this.isAdmin=true;
    }
    this.departmentService.getDepartments().subscribe(e => {
      this.departments = e;
    },
      error => this.errorMessage = <any>error);
  }
}

