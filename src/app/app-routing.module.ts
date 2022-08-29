import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './pages/login/components/login-screen/login-screen.component';
import { InfoScreenComponent } from './pages/info/components/info-screen/info-screen.component';

const routes: Routes = [
    { path: 'login', component: LoginScreenComponent },
    { path: 'info', component: InfoScreenComponent },
    { path: '',component: LoginScreenComponent  }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }