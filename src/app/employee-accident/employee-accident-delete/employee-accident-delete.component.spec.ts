import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAccidentDeleteComponent } from './employee-accident-delete.component';

describe('EmployeeAccidentDeleteComponent', () => {
  let component: EmployeeAccidentDeleteComponent;
  let fixture: ComponentFixture<EmployeeAccidentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAccidentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAccidentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
