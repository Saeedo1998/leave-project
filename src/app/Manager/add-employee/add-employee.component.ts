import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestServiceComponent } from 'src/app/rest-service/rest-service.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: RestServiceComponent) { }

  name: string = "";
  requestBody: string = "";

  ngOnInit(): void {
  }

  addEmployee() {
    this.name = (<HTMLInputElement>document.getElementById('name')).value;
    this.requestBody = `{
      "name":"`+ this.name + `",
      "departmentID":"1"
  }`;
    console.log(this.requestBody);
    this.service.post("http://localhost:8082/employees", JSON.parse(this.requestBody))
      .subscribe((response) => {
        console.log(response);
      });
  }
}

