import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestServiceComponent } from './rest-service.component';

describe('RestServiceComponent', () => {
  let component: RestServiceComponent;
  let fixture: ComponentFixture<RestServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
