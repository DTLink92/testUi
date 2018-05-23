import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListAssignequipComponent } from './employee-list-assignequip.component';

describe('EmployeeListAssignequipComponent', () => {
  let component: EmployeeListAssignequipComponent;
  let fixture: ComponentFixture<EmployeeListAssignequipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListAssignequipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListAssignequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
