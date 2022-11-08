import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-add-leave-type',
  templateUrl: './add-leave-type.component.html',
  styleUrls: ['./add-leave-type.component.css']
})
export class AddLeaveTypeComponent implements OnInit, AfterViewInit {

  @Input() leaveType = "OldValue";
  @Output() newLeaveTypeEvent = new EventEmitter<string>();
  @ViewChild("inputTest")inputTest: ElementRef|any;
  //for for more than one child
  // @ViewChildren("inputTest")inputTest: QueryList<any>;
  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.inputTest.nativeElement.style.color = "green";
    console.log(this.inputTest)
  }

  addNewLeaveType(value: string){
    this.newLeaveTypeEvent.emit(value);
  }

}
