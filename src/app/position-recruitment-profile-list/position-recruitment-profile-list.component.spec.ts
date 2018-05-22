import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionRecruitmentProfileListComponent } from './position-recruitment-profile-list.component';

describe('PositionRecruitmentProfileListComponent', () => {
  let component: PositionRecruitmentProfileListComponent;
  let fixture: ComponentFixture<PositionRecruitmentProfileListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionRecruitmentProfileListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionRecruitmentProfileListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
