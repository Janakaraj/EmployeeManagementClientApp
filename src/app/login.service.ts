import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { LoginDetails } from './userAuth/login-details.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://localhost:44339/api/AccountApi/login';
  role: string = null;
  userName: string = null;
  currentUserId: number;

  constructor(private http: HttpClient, private route: Router, private employeeService: EmployeeService) { }
  sendUserDetails(user: LoginDetails): void {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    var userJSON = JSON.stringify(user);
    this.http.post(this.url, userJSON, { headers: headers }).subscribe(
      resp => {
        var res = JSON.parse(JSON.stringify(resp));
        localStorage.setItem('auth_token', res.token);
        let jwtData = res.token.split('.')[1];
        let decodedJwtJsonData = JSON.parse(window.atob(jwtData));
        localStorage.setItem('userName', decodedJwtJsonData.name);
        localStorage.setItem('userRole', decodedJwtJsonData.role);
        this.role = decodedJwtJsonData.role;
        this.userName = decodedJwtJsonData.name;
        console.log("Login successFull.");
        this.route.navigate(['/home'])
          .then(() => {
            window.location.reload();
          });
      });

  }

  logout() {
    localStorage.clear();
    this.role = null;
    this.userName = null;
    console.log("Logout successFull.");
    this.route.navigate(['/home']).then(() => {
      window.location.reload();
    });

  }
}
