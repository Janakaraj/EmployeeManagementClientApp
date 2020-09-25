import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from '../department/department.model';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private deptService: DepartmentService) { }
  deptId: number;
  department: Department;
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      e => {
        this.deptId = +e.get('id');
      });
    this.deptService.getDepartment(this.deptId).subscribe(e => {
      return this.department = e;
    });
  }
}
