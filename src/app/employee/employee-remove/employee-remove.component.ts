import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-remove',
  templateUrl: './employee-remove.component.html',
  styleUrls: ['./employee-remove.component.css']
})
export class EmployeeRemoveComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private activatedRoute: ActivatedRoute, private route:Router) { }
  removeEmploeeId: number;
  employee:Employee;
  ngOnInit(): void {
  }
  delete() {
    this.activatedRoute.paramMap.subscribe(e => {
      this.removeEmploeeId = +e.get('id');
    });
    this.employeeService.getEmployee(this.removeEmploeeId).subscribe(e=>{
      this.employee=e;
    });
    this.employeeService.deleteEmployee(this.removeEmploeeId);
    this.route.navigate(['/employee']).then(() => {
      window.location.reload();
    });
  }
}
