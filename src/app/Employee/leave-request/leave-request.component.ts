import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  constructor() { }

  requestBody: string | any;
  ngOnInit(): void {
  }

  sendRequest(){
    this.requestBody = `{
        

    }
    `
  }

}
