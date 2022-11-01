import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.departmentId = this.route.snapshot.paramMap.get('id');
    // this.departmentId = parseInt(this.departmentId);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.departmentId = params.get('id');
      this.departmentId = parseInt(this.departmentId);
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/departments', {id: selectedId, test: 'testValue'}])
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route })
  }

  showOverview() {
    this.router.navigate(['overview'], { relativeTo: this.route })
  }

  showContact() {
    this.router.navigate(['contact'], { relativeTo: this.route })

  }

}
