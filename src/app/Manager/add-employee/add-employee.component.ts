import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/department-list/department-list.component';
import { RestServiceComponent } from 'src/app/rest-service/rest-service.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: RestServiceComponent,
    private http: HttpClient) { }

    employeeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      selectedDeptID: new FormControl('', Validators.required)
    });

  departmentData: Department[] | any;
  requestBody: string = "";
  @ViewChild('deptID') deptID: ElementRef | any;
  validationMsg: string = "";


  ngOnInit(): void {
    this.getDepartments();
  }

  isValid() {
    if (this.employeeForm.controls.name.value == "" || this.employeeForm.controls.name.value == null) {
      this.validationMsg = "Please input a name";
      return false;
    }

    if (this.deptID.value == "-1") {
      this.validationMsg = "Please choose a department";
      return false;
    }

    return true;
  }

  getDepartments() {
    // return this.http.get('http://localhost:8082/departments');
    this.http.get('http://localhost:8082/departments').subscribe(
      response => {
        console.log(response);
        this.departmentData = response;
      }
    );
  }

  addEmployee() {
    if (this.isValid() == false)
      return;

    this.requestBody = `{
      "name":"`+ this.employeeForm.controls.name.value + `",
      "departmentID":"`+ this.employeeForm.controls.selectedDeptID.value + `"
  }`;
    console.log(this.requestBody);
    this.service.post("http://localhost:8082/employees", JSON.parse(this.requestBody))
      .subscribe((response) => {
        console.log(response);
      });
  }
}

