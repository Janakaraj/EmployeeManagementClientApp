import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { ResetPassword } from '../reset-password.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
resetDetails: ResetPassword={
  email:null,
  password:null,
  confirmPassword:null
}
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }
submit(){
  if(this.resetDetails.password == this.resetDetails.confirmPassword){
    this.loginService.forgotPassword(this.resetDetails);
  }
  else{
    alert("Password and Confirm Password should be same. Please retry again.");
  }
  
}
}
