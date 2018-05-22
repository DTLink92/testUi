import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTypeEvaluatorListComponent } from './position-type-evaluator-list.component';

describe('PositionTypeEvaluatorListComponent', () => {
  let component: PositionTypeEvaluatorListComponent;
  let fixture: ComponentFixture<PositionTypeEvaluatorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTypeEvaluatorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTypeEvaluatorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
