import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { LoginDetails } from '../login-details.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private route:Router) { }
  loginDetails: LoginDetails = {
    email:null,
    password:null,
    rememberMe:false
  };
  ngOnInit(): void {
  }
  login(){
    this.loginService.sendUserDetails(this.loginDetails);
  }

}
