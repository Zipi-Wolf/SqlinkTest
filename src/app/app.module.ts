import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { LoginScreenComponent } from './pages/login/components/login-screen/login-screen.component'
import {LoginModule} from './pages/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { InfoScreenComponent } from './info-screen/info-screen.component'
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,

    LoginModule,

    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
 //bootstrap: [LoginScreenComponent]
})
export class AppModule { }
