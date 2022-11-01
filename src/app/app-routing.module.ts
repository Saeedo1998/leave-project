import { LiteralArray } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './Manager/employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/departments' },
  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id', component: DepartmentDetailComponent,
    children: [
      {path:'overview', component:DepartmentOverviewComponent},
      {path:'contact', component: DepartmentContactComponent}
    ]
  },
  { path: 'view-employees', component: EmployeeListComponent },
  { path: 'add-employee', component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//gives error for some reason
// export const routingComponents [EmployeeListComponent, DepartmentListComponent]
