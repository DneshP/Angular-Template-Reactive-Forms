import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListFormComponent } from './course-list-form.component';

describe('CourseListFormComponent', () => {
  let component: CourseListFormComponent;
  let fixture: ComponentFixture<CourseListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
