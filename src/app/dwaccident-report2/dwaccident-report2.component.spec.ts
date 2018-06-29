import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DwaccidentReport2Component } from './dwaccident-report2.component';

describe('DwaccidentReport2Component', () => {
  let component: DwaccidentReport2Component;
  let fixture: ComponentFixture<DwaccidentReport2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwaccidentReport2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwaccidentReport2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
