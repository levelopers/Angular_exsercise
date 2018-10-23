import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component'; //new Component
// import{ServiceExampleService}from './serviceExample.service'
import {EmployeeService} from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent//ng g c test --> test component added as module
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
