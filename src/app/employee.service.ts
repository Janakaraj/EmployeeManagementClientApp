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
