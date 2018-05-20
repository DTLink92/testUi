import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEquipmentComponent } from './type-equipment.component';

describe('TypeEquipmentComponent', () => {
  let component: TypeEquipmentComponent;
  let fixture: ComponentFixture<TypeEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
