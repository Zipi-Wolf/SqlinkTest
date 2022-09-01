
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component'; 
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common'; 
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        LoginScreenComponent
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
    ],
    providers: [],
})

export class LoginModule { }