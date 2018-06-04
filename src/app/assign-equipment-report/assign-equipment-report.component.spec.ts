import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignEquipmentReportComponent } from './assign-equipment-report.component';

describe('AssignEquipmentReportComponent', () => {
  let component: AssignEquipmentReportComponent;
  let fixture: ComponentFixture<AssignEquipmentReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignEquipmentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignEquipmentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
