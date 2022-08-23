import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Injectable()
export class Logininterceptor implements HttpInterceptor {
  
  public user= new User ("","","","","","","1900-01-01", []);
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();
  
    this.user = JSON.parse(<string>sessionStorage.getItem('sigtpeaccess'));

   if(this.user && this.user.password!="" && this.user.email!=""){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + btoa(this.user.email + ':' + this.user.password));
    }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    httpHeaders = httpHeaders.append('Accept', 'application/json');

    const xhr = req.clone({
      headers: httpHeaders
    });
    return next.handle(xhr).pipe(tap(() => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['login']);
        }
      }));
  }
}
