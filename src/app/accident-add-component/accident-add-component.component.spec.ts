import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentAddComponentComponent } from './accident-add-component.component';

describe('AccidentAddComponentComponent', () => {
  let component: AccidentAddComponentComponent;
  let fixture: ComponentFixture<AccidentAddComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentAddComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
