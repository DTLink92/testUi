import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentCauseGroupComponent } from './accident-cause-group.component';

describe('AccidentCauseGroupComponent', () => {
  let component: AccidentCauseGroupComponent;
  let fixture: ComponentFixture<AccidentCauseGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentCauseGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentCauseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
