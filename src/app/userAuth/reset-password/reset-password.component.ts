import { Component, OnInit } from '@angular/core';
import { ResetPassword } from '../reset-password.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
resetPassword: ResetPassword={
  password:null,
  confirmPassword:null
};
  constructor() { }

  ngOnInit(): void {
  }
reset(){
  
}
}
