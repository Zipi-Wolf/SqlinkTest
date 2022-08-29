import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login/components/login-screen/login-screen.component'
import {LoginModule} from './pages/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent
  ],
  imports: [
    BrowserModule,

    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

    LoginModule,

    BrowserAnimationsModule

  ],
  providers: [],
 // bootstrap: [AppComponent]
 bootstrap: [LoginScreenComponent]
})
export class AppModule { }
