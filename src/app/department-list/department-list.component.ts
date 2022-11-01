import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId: any;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Angular2"},
    {"id": 3, "name": "Angular3"},
    {"id": 4, "name": "Angular4"},
    {"id": 5, "name": "Angular5"}

  ]

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.selectedId = params.get('id');
      this.selectedId = parseInt(this.selectedId);
    });
  
  }

  onSelect(department:any){
    //absolute
    // this.router.navigate(['/departments', department.id]);
    //relative
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department:any){
    return department.id === this.selectedId;
  }

}
