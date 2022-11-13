import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  employeeData: Employee | any;
  ngOnInit(): void {
    this.getEmployees();

  }

  getEmployees() {
    // this.http.get<any>('http://localhost:8082/employeesWithDeptName').subscribe(
    this.http.get<any>('http://localhost:8082/employees').subscribe(
      response => {
        console.log(response);
        this.employeeData = response;
      }
    );
  }


}

export class Employee {
  constructor(
    public id: number,
    public name: string,
    public departmentID: string,
    public departmentName: string
  ) { }
}
