import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee/employee.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
userName:string;
role:string;
  constructor() { }

  ngOnInit(): void {
    this.fetch();
  }
  fetch(){
    this.userName=localStorage.getItem('userName');
    this.role=localStorage.getItem('userRole');
  }
}
