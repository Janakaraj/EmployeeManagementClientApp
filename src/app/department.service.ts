import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Department } from './department/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private url = 'https://localhost:44339/api/DepartmentsApi';
  constructor(private http: HttpClient) { }
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getDepartment(id: number): Observable<Department> {
    return this.http.get<Department>(this.url + `/${id}`).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  addDepartment(department: Department): void {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    var departmentJSON = JSON.stringify(department);
    this.http.post(this.url, departmentJSON, { headers: headers }).subscribe(
      () => {
        console.log("New department added successfully.");
        return this.getDepartments();
      });
  }
  updateDepartment(id: number, department: Department): void {
    this.http.put(this.url + `/${id}`, JSON.stringify(department), { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }).subscribe(
      () => {
        return this.getDepartments();
      });
  }
  deleteDepartment(id: number): void {
    if (confirm("Delete this department?")) {
      this.http.delete(this.url + `/${id}`, { responseType: 'text' }).subscribe(
        () => {
          console.log("One department was deleted successfully.");
          return this.getDepartments();
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
