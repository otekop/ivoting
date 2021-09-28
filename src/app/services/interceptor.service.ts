import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../shared/constants';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private userService: UserService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.startsWith(Constants.baseUrl) && this.userService.getToken() !== null) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.userService.getToken()}`
        }
      });
    }
    return next.handle(request);
  }
}
