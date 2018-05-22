import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTypeEvaluatorEditComponent } from './position-type-evaluator-edit.component';

describe('PositionTypeEvaluatorEditComponent', () => {
  let component: PositionTypeEvaluatorEditComponent;
  let fixture: ComponentFixture<PositionTypeEvaluatorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTypeEvaluatorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTypeEvaluatorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
