import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee/employee.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LearnDemo';
  loggedIn: boolean = false;
  userName: string = localStorage.getItem('userName');
  employees: Array<Employee>;
  id:number;
  constructor(private loginService: LoginService, private employeeService: EmployeeService) {

  }
  ngOnInit(): void {
    if (localStorage.getItem('auth_token')) {
      this.loggedIn = true;
      this.getId();
    }
    else {
      this.loggedIn = false;
    }
  }
  getId(){
    this.employeeService.getEmployees().subscribe(e=>{
      this.employees=e;
    
    for(var i=0;i<this.employees.length;i++){
      if(this.employees[i].email == this.userName){
        this.id= this.employees[i].id;
      }
      continue;
    }
  });
  }
  logout() {
    this.loginService.logout();
  }
}
