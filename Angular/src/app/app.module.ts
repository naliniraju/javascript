import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentComponent } from './students/student.component';

import { StudentCustomPipe } from './students/student.custom.pipe';

import { StudentCalculatePipe } from './students/student.calculate.pipe';

import { StudentCustomComponent } from './students/student.custom.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentCustomPipe,
    StudentCalculatePipe,
    StudentCustomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
