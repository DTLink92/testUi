import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAccidentAddComponent } from './employee-accident-add.component';

describe('EmployeeAccidentAddComponent', () => {
  let component: EmployeeAccidentAddComponent;
  let fixture: ComponentFixture<EmployeeAccidentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeAccidentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeAccidentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
