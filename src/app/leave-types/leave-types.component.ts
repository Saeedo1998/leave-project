import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-leave-types',
  templateUrl: './leave-types.component.html',
  styleUrls: ['./leave-types.component.css']
})
export class LeaveTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentLeaveType = "newValue";
  leaveTypes = ['Study','Sick'];

  addLeaveType(newLeaveType: string){
    this.leaveTypes.push(newLeaveType);
    this.clearInput();
  }

  clearInput(){
    let input = <HTMLInputElement>document.getElementById('leave-type-input');
    input.value = '';
  }


}