import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  public selectedId: any;
  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Angular2" },
    { "id": 3, "name": "Angular3" },
    { "id": 4, "name": "Angular4" },
    { "id": 5, "name": "Angular5" }

  ]

  departmentData:any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.getDepartments().subscribe((data) => {
      this.departmentData = data;
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('id');
      this.selectedId = parseInt(this.selectedId);
    });

  }
  

  getDepartments() {
    return this.http.get('http://localhost:8082/departments');
  }

  onSelect(department: any) {
    //absolute
    // this.router.navigate(['/departments', department.id]);
    //relative
    this.router.navigate([department.id], { relativeTo: this.route });
  }

  isSelected(department: any) {
    return department.id === this.selectedId;
  }



}
