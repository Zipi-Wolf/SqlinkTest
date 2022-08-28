import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import {ValidationService} from 'services/validation.service.ts'

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {


  public loginForm: FormGroup;

  constructor(public validationService:ValidationService) { 
    this.loginForm= this.formBuilder.group({
      email:new FormControl('',{validators:[validationService.emailValid()]}),
     // password:new FormControl('',{validators:[this.passwordValid()]}),
    })
  }

  ngOnInit(): void {
  }

 
  passwordValid(){

  }


}
