import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentService } from 'src/app/department.service';
import { Department } from '../department.model';

@Component({
  selector: 'app-department-remove',
  templateUrl: './department-remove.component.html',
  styleUrls: ['./department-remove.component.css']
})
export class DepartmentRemoveComponent implements OnInit {

  constructor(private deptService: DepartmentService, private activatedRoute: ActivatedRoute, private route:Router) { }
  removeDeptId: number;
  department:Department;
  ngOnInit(): void {
  }
  delete() {
    this.activatedRoute.paramMap.subscribe(e => {
      this.removeDeptId = +e.get('id');
    });
    this.deptService.getDepartment(this.removeDeptId).subscribe(e=>{
      this.department=e;
    });
    this.deptService.deleteDepartment(this.removeDeptId);
    this.route.navigate(['/department']).then(() => {
      window.location.reload();
    });
  }

}
