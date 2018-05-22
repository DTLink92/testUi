import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionRecruitmentProfileComponent } from './position-recruitment-profile.component';

describe('PositionRecruitmentProfileComponent', () => {
  let component: PositionRecruitmentProfileComponent;
  let fixture: ComponentFixture<PositionRecruitmentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionRecruitmentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionRecruitmentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
