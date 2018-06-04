import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPositionEquipmentComponent } from './assign-position-equipment.component';

describe('AssignPositionEquipmentComponent', () => {
  let component: AssignPositionEquipmentComponent;
  let fixture: ComponentFixture<AssignPositionEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPositionEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPositionEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
