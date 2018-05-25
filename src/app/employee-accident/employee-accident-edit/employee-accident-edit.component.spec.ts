import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAccidentEditComponent } from './employee-accident-edit.component';

describe('EmployeeAccidentEditComponent', () => {
  let component: EmployeeAccidentEditComponent;
  let fixture: ComponentFixture<EmployeeAccidentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAccidentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAccidentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
