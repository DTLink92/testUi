import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwaccidentReport1Component } from './dwaccident-report1.component';

describe('DwaccidentReport1Component', () => {
  let component: DwaccidentReport1Component;
  let fixture: ComponentFixture<DwaccidentReport1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwaccidentReport1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwaccidentReport1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
