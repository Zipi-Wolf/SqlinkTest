import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import {AuthState} from '../state/login.state';
//import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store:Store) {}
  //private authService: AuthService

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler) 
  {
    const token =this.store.selectSnapshot(AuthState.token);
    console.log('the token is: ' + token);
    if (!token) {
      return next.handle(request);
    }

    request = request.clone({
      headers: request.headers.set('Authorization', 'Bearer ' + token),
    });

    return next.handle(request);
  }
}
