import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {ValidatorsService} from 'src/app/services/validators.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    public validatorsService:ValidatorsService,
    public formBuilder:FormBuilder) { 
     this.loginForm= this.formBuilder.group({
       email:new FormControl('',{validators:[validatorsService.emailValid()]}),
       password:new FormControl('',{validators:[validatorsService.passwordValid()]}),
     })
  }

  ngOnInit(): void {
  }
 
  login(){
    console.log("i'm in login");
  }
}
