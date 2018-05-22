import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTypeEvaluatorComponent } from './position-type-evaluator.component';

describe('PositionTypeEvaluatorComponent', () => {
  let component: PositionTypeEvaluatorComponent;
  let fixture: ComponentFixture<PositionTypeEvaluatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTypeEvaluatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTypeEvaluatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
