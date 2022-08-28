import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login/components/login-screen/login-screen.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from './pages/login/login.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    LoginModule
  ],
  providers: [],
 // bootstrap: [AppComponent]
 bootstrap: [LoginScreenComponent]
})
export class AppModule { }
