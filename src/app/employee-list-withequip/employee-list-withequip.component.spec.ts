import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListWithequipComponent } from './employee-list-withequip.component';

describe('EmployeeListWithequipComponent', () => {
  let component: EmployeeListWithequipComponent;
  let fixture: ComponentFixture<EmployeeListWithequipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListWithequipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListWithequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
