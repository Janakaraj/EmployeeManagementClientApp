import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Employee } from './employee/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'https://localhost:44339/api/EmployeesApi';
  constructor(private http: HttpClient) { }
   
  employee:Employee;
  employees:Observable<Employee[]>;
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  
  getEmployee(id:number):Observable<Employee>{
    return this.http.get<Employee>(this.url+`/${id}`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  addEmployee(employee:Employee):void{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    var employeeJSON = JSON.stringify(employee);
    console.log(employeeJSON);
    this.http.post(this.url,employeeJSON,{headers: headers}).subscribe(
      ()=>{
        console.log("New employee added successfully.");
        return this.getEmployees();
      });
  }
  updateEmployee(id:number,employee:Employee):void{
    this.http.put(this.url+`/${id}`, JSON.stringify(employee),{headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(
      ()=>{
        return this.getEmployees();
      });
  }
  deleteEmployee(id:number):void{
    if(confirm("Delete this employee?")){
      this.http.delete(this.url+`/${id}`,{ responseType: 'text' }).subscribe(
        ()=>{
          console.log("One employee deleted successfully.");
          return this.getEmployees();
        });
    }
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
