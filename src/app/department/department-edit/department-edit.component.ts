import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from '../department.model';

@Component({
  selector: 'app-department-edit',
  templateUrl: './department-edit.component.html',
  styleUrls: ['./department-edit.component.css']
})
export class DepartmentEditComponent implements OnInit {

 
  updateDeptId: number = 0;
  department: Department = {
    departmentId: this.updateDeptId,
    departmentName: null
  };
  constructor(private deptService: DepartmentService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(e => {
      this.updateDeptId = +e.get('id');
    });
    this.deptService.getDepartment(this.updateDeptId).subscribe(e => {
      this.department = e;
    });
  }

  update(): void {
    this.deptService.updateDepartment(this.updateDeptId, this.department);
    this.route.navigate(['/department']).then(() => {
      window.location.reload();
    });
  }

}
