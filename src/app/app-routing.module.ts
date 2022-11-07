import { LiteralArray } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { LeaveRequestComponent } from './Employee/leave-request/leave-request.component';
import { AddEmployeeComponent } from './Manager/add-employee/add-employee.component';
import { EmployeeListComponent } from './Manager/employee-list/employee-list.component';
import { ViewRequestComponent } from './Manager/view-request/view-request.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  //default redirect
  // { path: '', pathMatch: 'full', redirectTo: '/departments' },
  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id', component: DepartmentDetailComponent,
    children: [
      {path:'overview', component:DepartmentOverviewComponent},
      {path:'contact', component: DepartmentContactComponent}
    ]
  },
  { path: 'view-employees', component: EmployeeListComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'leave-request', component: LeaveRequestComponent },
  { path: 'view-request', component: ViewRequestComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//gives error for some reason
// export const routingComponents [EmployeeListComponent, DepartmentListComponent]
