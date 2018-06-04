import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailPositionequipmentComponent } from './list-detail-positionequipment.component';

describe('ListDetailPositionequipmentComponent', () => {
  let component: ListDetailPositionequipmentComponent;
  let fixture: ComponentFixture<ListDetailPositionequipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDetailPositionequipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailPositionequipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
