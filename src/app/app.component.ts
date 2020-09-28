import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LearnDemo';
  loggedIn :boolean = false;
  constructor(private loginService : LoginService){}
  ngOnInit():void{
    if(localStorage.getItem('auth_token')){
      this.loggedIn=true;
    }
    else{
      this.loggedIn=false;
    }
  }
  logout(){
  this.loginService.logout();
  }
}
