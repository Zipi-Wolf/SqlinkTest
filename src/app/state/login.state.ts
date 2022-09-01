import { Injectable } from '@angular/core';
import { Login, Logout } from './../actions/login.actions';
//import { LoginService } from './../../../../core/services/login.service';
import { HttpService } from '../services/http.service';
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
//import {Login} from '../models/login.model';

// export class AuthStateModel {
//  token: string="";
//  username: string="";
// }
export class AuthStateModel {
token:string="";
personalDetails:PersonalDetails =  {} as any;
}


export interface PersonalDetails{
name:string;
Team:string;
joinedAt:Date;
avatar:string;
}

@State<AuthStateModel>({
 name: 'auth',
 defaults: {
 token: "",
 personalDetails: {} as any
  }
})


@Injectable()
export class AuthState {

  @Selector()
 // tslint:disable-next-line: typedef
 static token(state: AuthStateModel) { return state.token; }

 @Selector()
 static personalDetails(state: AuthStateModel) { return state.personalDetails; }

 constructor(private httpService: HttpService) {}

  @Action(Login)
  login({ patchState }: StateContext<AuthStateModel>, { payload }: 
  Login) {
      //return this.httpService.callLoginMock(payload).pipe(tap((result) => {
          //patchState({ token: result[0].token, username: payload.username 
        return this.httpService.callLogin(payload).pipe(tap((result) => {
          patchState({ token: result.token, 
            personalDetails: result.personalDetails
         });
    },
       catchError((err) => {
       return throwError(`Invalid username or password`);
    })
  ));
  }
}  

//   @Action(Logout)
//   logout({ setState, getState }: StateContext<AuthStateModel>) {
//   const { token } = getState();
//       setState(
//         {
//            username: null,
//            token: null
//       }
//     );
//   }

