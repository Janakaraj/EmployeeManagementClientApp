import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        //'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json, text/plain, */*',
        'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
      },
    });
    return next.handle(request);
  }
}
