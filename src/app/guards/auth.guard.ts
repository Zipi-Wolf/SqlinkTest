import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthState } from '../state/login.state';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
 constructor(private store: Store) {}

 canActivate(): boolean {
 //return this.store.select(AuthState.token);
 
 return this.store.select(AuthState.token)!=null?true:false;
  }

}