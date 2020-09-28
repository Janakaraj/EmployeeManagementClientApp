import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from './userAuth/login-details.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://localhost:44339/api/AccountApi/login';

  constructor(private http: HttpClient, private route:Router) { }
  sendUserDetails(user:LoginDetails):void{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    var userJSON = JSON.stringify(user);
    console.log(userJSON);
    this.http.post(this.url,userJSON,{headers: headers}).subscribe(
      resp => {
        var res = JSON.parse(JSON.stringify(resp));
        localStorage.setItem('auth_token', res.token);
        this.route.navigate(['/home']).then(() => {
          window.location.reload();
      });
      });
      
  }
  logout(){
    localStorage.clear();
    this.route.navigate(['/home']).then(() => {
      window.location.reload();
  });
    
  }
}
