import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAccidentListComponent } from './employee-accident-list.component';

describe('EmployeeAccidentListComponent', () => {
  let component: EmployeeAccidentListComponent;
  let fixture: ComponentFixture<EmployeeAccidentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAccidentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAccidentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
