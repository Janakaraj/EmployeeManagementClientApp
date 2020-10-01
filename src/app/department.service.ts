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
    let authToken = localStorage.getItem('auth_token');
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Basic ${authToken}`)
    }
    return this.http.get<Department[]>(this.url,header).pipe(
      tap(data => console.log("Departments fetched successfully")),
      catchError(this.handleError)
    );
  }

  getDepartment(id: number): Observable<Department> {
    let headers = new HttpHeaders();
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get<Department>(this.url + `/${id}`,{headers}).pipe(
      tap(data => console.log("Department fetched successfully.")),
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
        console.log("One department updateed successfully.");
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
