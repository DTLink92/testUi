import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRegisterFormComponent } from './employee-register-form.component';

describe('EmployeeRegisterFormComponent', () => {
  let component: EmployeeRegisterFormComponent;
  let fixture: ComponentFixture<EmployeeRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
