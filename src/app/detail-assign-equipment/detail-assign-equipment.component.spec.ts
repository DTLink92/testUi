import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAssignEquipmentComponent } from './detail-assign-equipment.component';

describe('DetailAssignEquipmentComponent', () => {
  let component: DetailAssignEquipmentComponent;
  let fixture: ComponentFixture<DetailAssignEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAssignEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAssignEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
