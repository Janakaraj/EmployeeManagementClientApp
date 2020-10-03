import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';
import { LoginDetails } from './userAuth/login-details.model';
import { ResetPassword } from './userAuth/reset-password.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://localhost:44339/api/AccountApi/login';
  private fpurl = 'https://localhost:44339/api/AccountApi/forgotPassword';

  role: string = null;
  userName: string = null;
  currentUserId: number;
  error:number= null;

  constructor(private http: HttpClient, private route: Router, private employeeService: EmployeeService) { }
  sendUserDetails(user: LoginDetails){
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
        console.log("Login successfull.");
        this.route.navigate(['/home'])
          .then(() => {
            window.location.reload();
          });
      },
      error=> {
      this.error = +error.status;
      if (this.error == 400) {
        alert("Email address formate is invalid");
      }
      if (this.error == 401) {
        alert("Incorrect email address or password");
      }
      // else{
      //   alert("There was a server error. Please try again");
      // }
      console.log(error);
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
  forgotPassword(newPassword :ResetPassword){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    var newPasswordJSON = JSON.stringify(newPassword);
    this.http.post(this.fpurl,newPasswordJSON,{ headers: headers }).subscribe(e=>{
      alert("Password reset was successful. Please Login to continue.");
      this.route.navigate(['/login']);
    },
    error=>{
      if(error.status == 404)
      alert("There was an error : User not found. Try again.");
      if(error.status == 500)
      alert("There was an error : Failed to reset passsword. Try again.");
      if(error.status == 400)
      alert("There was an error : Invalid formate. Try again.");
    });
  }
}
