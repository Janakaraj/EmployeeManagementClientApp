import { Component, OnInit } from '@angular/core';
import * as signalR from '@aspnet/signalr';
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
  id: number;
  private hubConnection: signalR.HubConnection;
  notificationList: Array<string> = [];
  constructor(private loginService: LoginService, private employeeService: EmployeeService) {

  }
  ngOnInit(): void {
    var snd = new Audio();
    snd.src="https://notificationsounds.com/soundfiles/9cf81d8026a9018052c429cc4e56739b/file-sounds-1145-when.mp3",
    "https://notificationsounds.com/soundfiles/9cf81d8026a9018052c429cc4e56739b/file-sounds-1145-when.ogg",
    "https://notificationsounds.com/soundfiles/9cf81d8026a9018052c429cc4e56739b/file-sounds-1145-when.wav";
    console.log(localStorage.getItem('auth_token'));
    if (localStorage.getItem('auth_token')) {
      this.loggedIn = true;
      this.getId();
      this.hubConnection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Debug)
      .withUrl('https://localhost:44339/NotificationHub')
      .build();
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
      })
      .catch(err => console.log('Error while starting connection: ' + err))
      if(localStorage.getItem('userRole')=="HR"){
        this.hubConnection.on('sendAddDepartmentMessage', (name) => {
          var noti = name + " " + " department was added by admin";
          localStorage.setItem('noti', noti);
          snd.play();
          this.notificationList.push(noti);
        });
        this.hubConnection.on('sendEditProfileMessage', (name) => {
          var noti = name + " edited their profile";
          localStorage.setItem('noti', noti);
          console.log(localStorage.getItem('noti'));
          snd.play();
          this.notificationList.push(noti);
        });
      }
      else if(localStorage.getItem('userRole')=="Employee"){
        this.hubConnection.on('sendAddEmployeeMessage', (name, surname) => {
          var noti = name + " " + surname + " was added to by admin/hr";
          localStorage.setItem('noti', noti);
          console.log(localStorage.getItem('noti'));
          snd.play();
          this.notificationList.push(noti);
        });
      }
      else if(localStorage.getItem('userRole')=="Admin"){
        this.hubConnection.on('sendEditProfileMessage', (name) => {
          var noti = name + " edited their profile";
          localStorage.setItem('noti', noti);
          console.log(localStorage.getItem('noti'));
          snd.play();
          this.notificationList.push(noti);
        });
      }
    }
    else {
      this.loggedIn = false;
    }
     
  }
  getId() {
    this.employeeService.getEmployees().subscribe(e => {
      this.employees = e;

      for (var i = 0; i < this.employees.length; i++) {
        if (this.employees[i].email == this.userName) {
          this.id = this.employees[i].id;
        }
        continue;
      }
    });
  }
  logout() {
    this.loginService.logout();
  }
}
