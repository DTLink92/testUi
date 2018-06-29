import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccidentDeleteComponentComponent } from './accident-delete-component.component';

describe('AccidentDeleteComponentComponent', () => {
  let component: AccidentDeleteComponentComponent;
  let fixture: ComponentFixture<AccidentDeleteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccidentDeleteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccidentDeleteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
