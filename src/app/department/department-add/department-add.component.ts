import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from '../department.model';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
department:Department ={
  departmentId:0,
  departmentName:null
}
  constructor(private deptService:DepartmentService, private route:Router) { }

  ngOnInit(): void {
  }
  add():void{
  this.deptService.addDepartment(this.department);
  this.route.navigate(['/department']).then(() => {
    window.location.reload();
});
  }
}
