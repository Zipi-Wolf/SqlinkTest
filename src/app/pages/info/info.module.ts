
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {InfoScreenComponent} from '../info/components/info-screen/info-screen.component'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations: [
        InfoScreenComponent
    ],
    imports: [
        RouterModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
    ],
    providers: [],
})

export class InfoModule { }