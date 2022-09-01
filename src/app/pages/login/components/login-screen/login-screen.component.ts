import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {ValidatorsService} from 'src/app/services/validators.service';
import {HttpService} from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/actions/login.actions';
import {AuthStateModel} from 'src/app/state/login.state';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(public validatorsService:ValidatorsService,
              public httpService:HttpService,
              public formBuilder:FormBuilder,
              public router:Router,
              public store:Store) { 
     this.loginForm= this.formBuilder.group({
       email:new FormControl('',[validatorsService.emailValid()]),
       password:new FormControl('',{validators:[validatorsService.passwordValid()]}),
     })
  }

  ngOnInit(): void {
  }
 
  login(){
    console.log("i'm in login");
    // this.httpService.callLoginMock(this.loginForm.value)
    // .subscribe((res) => {
    //   console.log(res);
    //   // sessionStorage.setItem("Token", res[0].token);
    //   // sessionStorage.setItem("personalDetails", res[0].personalDetails);

  this.store.dispatch(new Login({username:this.loginForm.controls['email'].value
                                ,password:this.loginForm.controls['password'].value})).subscribe(
                                  (res) => {
                                       console.log(res);
                                       this.router.navigate(['/info']);
                                  }
                                )

  
}
}

