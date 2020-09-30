import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import {ActivatedRoute} from '@angular/router';
import { Employee } from '../employee/employee.model';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
  employee:Employee;
  role:string = localStorage.getItem('userRole');
  show:boolean= true;
  eid:number;
  constructor( private empService: EmployeeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    if(this.role == "Employee"){
      this.show=false;
    }
    this.route.paramMap
    .subscribe(i=>{
      this.eid=+i.get('id');
    });
    this.empService.getEmployee(this.eid).subscribe(
      e=>{
        return this.employee =e;
      }
    );
  }

}
