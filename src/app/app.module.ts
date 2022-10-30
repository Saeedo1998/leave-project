import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeaveRequestComponent } from './Employee/leave-request/leave-request.component';
import { AddEmployeeComponent } from './Manager/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './Manager/view-employee/view-employee.component';
import { ViewRequestComponent } from './Manager/view-request/view-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LeaveRequestComponent,
    AddEmployeeComponent,
    ViewEmployeeComponent,
    ViewRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
