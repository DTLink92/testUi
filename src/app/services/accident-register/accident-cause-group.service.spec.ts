import { TestBed, inject } from '@angular/core/testing';

import { AccidentCauseGroupService } from './accident-cause-group.service';

describe('AccidentCauseGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentCauseGroupService]
    });
  });

  it('should be created', inject([AccidentCauseGroupService], (service: AccidentCauseGroupService) => {
    expect(service).toBeTruthy();
  }));
});
