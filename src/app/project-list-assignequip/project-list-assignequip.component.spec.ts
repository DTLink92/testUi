import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListAssignequipComponent } from './project-list-assignequip.component';

describe('ProjectListAssignequipComponent', () => {
  let component: ProjectListAssignequipComponent;
  let fixture: ComponentFixture<ProjectListAssignequipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectListAssignequipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListAssignequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
