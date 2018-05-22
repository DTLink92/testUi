import { TestBed, inject } from '@angular/core/testing';

import { PositionRecruitmentProfileService } from './position-recruitment-profile.service';

describe('PositionRecruitmentProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionRecruitmentProfileService]
    });
  });

  it('should be created', inject([PositionRecruitmentProfileService], (service: PositionRecruitmentProfileService) => {
    expect(service).toBeTruthy();
  }));
});
