import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEquipmentEditComponent } from './type-equipment-edit.component';

describe('TypeEquipmentEditComponent', () => {
  let component: TypeEquipmentEditComponent;
  let fixture: ComponentFixture<TypeEquipmentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEquipmentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEquipmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
