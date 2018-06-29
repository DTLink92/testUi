import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentEditComponentComponent } from './accident-edit-component.component';

describe('AccidentEditComponentComponent', () => {
  let component: AccidentEditComponentComponent;
  let fixture: ComponentFixture<AccidentEditComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentEditComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentEditComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
