import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {ValidatorsService} from 'src/app/services/validators.service';
import {HttpService} from 'src/app/services/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public validatorsService:ValidatorsService,
    public httpService:HttpService,
    public formBuilder:FormBuilder,
    public router:Router) { 
     this.loginForm= this.formBuilder.group({
       email:new FormControl('',{validators:[validatorsService.emailValid()]}),
       password:new FormControl('',{validators:[validatorsService.passwordValid()]}),
     })
  }

  ngOnInit(): void {
  }
 
  login(){
    console.log("i'm in login");
    this.httpService.callLoginMock(this.loginForm.value)
    .subscribe((res) => {
      console.log(res);
      sessionStorage.setItem("Token", res[0].token);
      this.router.navigate(['/info']);
    });
  }
}
