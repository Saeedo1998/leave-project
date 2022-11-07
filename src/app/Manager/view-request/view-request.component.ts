import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RestServiceComponent } from 'src/app/rest-service/rest-service.component';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent implements OnInit {

  constructor(private http: HttpClient,
    private service: RestServiceComponent) { }

  requestData: LeaveRequest | any;
  reqUpdateText: string = "";
  selectedReqId: number | undefined;
  responseBody: string = "{}";

  ngOnInit(): void {
    this.getRequests();

  }

  getRequests() {
    this.http.get<any>('http://localhost:8082/leaverequests').subscribe(
      response => {
        console.log(response);
        this.requestData = response;
      }
    );
  }

  updateRequest(action: string) {
    //check if selection is null
    if (this.selectedReqId == null || this.selectedReqId == undefined) {
      this.reqUpdateText = "Please select a request";
      return;
    }
    //continue
    this.service.post('http://localhost:8082/leaverequests/' + action + '?reqID=' + this.selectedReqId, 
    JSON.parse(this.responseBody)).subscribe(
      (response: string) => {
        console.log(response);
        this.reqUpdateText = response;
      }
    )
    //refresh
    this.getRequests();
  }

  approveRequest() {
    this.updateRequest("approve");
  }

  rejectRequest() {
    this.updateRequest("reject");
  }


}

export class LeaveRequest {
  constructor(
    public id: number,
    public employeeId: string,
    public fromDate: Date,
    public toDate: Date,
    public CreateDate: Date,
    public action: string

  ) { }
}