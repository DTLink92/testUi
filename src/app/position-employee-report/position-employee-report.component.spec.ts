import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionEmployeeReportComponent } from './position-employee-report.component';

describe('PositionEmployeeReportComponent', () => {
  let component: PositionEmployeeReportComponent;
  let fixture: ComponentFixture<PositionEmployeeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionEmployeeReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionEmployeeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
