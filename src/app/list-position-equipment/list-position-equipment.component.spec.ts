import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPositionEquipmentComponent } from './list-position-equipment.component';

describe('ListPositionEquipmentComponent', () => {
  let component: ListPositionEquipmentComponent;
  let fixture: ComponentFixture<ListPositionEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPositionEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPositionEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
