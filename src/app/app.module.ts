import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

//import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import {LoginModule} from './pages/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { NgxsModule } from '@ngxs/store';
import { ProjectsState } from '../app/state/project.state';
import { AuthState } from '../app/state/login.state';
import { AuthGuard } from './guards/auth.guard';
import { Store } from '@ngxs/store';

import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor'
import { InfoModule } from './pages/info/info.module';
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin'; 
//import { SpinnerInterceptor } from 'src/app/interceptors/spinner.interceptor'


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    NgxsModule.forRoot([ProjectsState,AuthState]),

    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    //MatTableModule,
    MatProgressSpinnerModule,

    LoginModule,
    InfoModule,

    BrowserAnimationsModule,

    NgxsStoragePluginModule.forRoot({ key: 'auth', storage: StorageOption.SessionStorage }), 
  ],
  providers: [AuthGuard , Store
  ,   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  //{ provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
