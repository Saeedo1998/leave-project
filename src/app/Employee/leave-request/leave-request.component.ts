import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { catchError, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestServiceComponent } from 'src/app/rest-service/rest-service.component';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css'],
  providers: [DatePipe]
})
export class LeaveRequestComponent implements OnInit {

  constructor(private datePipe: DatePipe,
    private http: HttpClient,
    private service: RestServiceComponent
  ) { }


  requestBody: string | any;
  createDate: any = new Date();
  fromDate: any = new Date();
  toDate: any = new Date();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Credentials': 'true',
    }),
    withCredentials: true,
    observe: 'response' as 'response'
  };


  ngOnInit(): void {
  }

  sendRequest() {
    this.createDate = this.datePipe.transform(this.createDate, 'yyyy-MM-dd');

    this.fromDate = (<HTMLInputElement>document.getElementById("fromDate")).value;
    this.toDate = (<HTMLInputElement>document.getElementById("toDate")).value;
    this.requestBody = `
    {
      "fromDate":"`+ this.fromDate + `",
      "toDate":"`+ this.toDate + `",
      "createDate":"`+ this.createDate + `",
      "updateDate":"`+ this.createDate + `",
      "employeeID":"1",
      "managerID":"1",
      "departmentID":"1",
      "action":""
  }`
    console.log(this.requestBody);
    this.addRequest().subscribe((response) =>{
      console.log(response);
    });

    // this.addRequest(this.requestBody).subscribe((response: any) => {
    //   console.log(response);
    // });

  }

  // addRequest(requestBody: string) {
  //   return this.http.post<any>('http://localhost:8082/leaverequests', JSON.stringify(requestBody), this.httpOptions)
  //     .pipe(
  //       // catchError(this.handleError('addRequest'))
  //     );

  //     // this.http.get<any>('http://localhost:8082/departments').subscribe(
  //     //   response => {
  //     //     console.log(response);
  //     //     this.departmentData = response;
  //     //   }
  // }

  addRequest() {
    return this.service.post("http://localhost:8082/leaverequests", JSON.parse(this.requestBody));
    
  }


}
