import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component'; //new Component
// import{ServiceExampleService}from './serviceExample.service'
import {EmployeeService} from './employee.service';
import { HttpClientComponent } from './http-client/http-client.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HttpClientComponent//ng g c test --> test component added as module
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
