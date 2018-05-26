import { TestBed, inject } from '@angular/core/testing';

import { AccidentCauseService } from './accident-cause.service';

describe('AccidentCauseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentCauseService]
    });
  });

  it('should be created', inject([AccidentCauseService], (service: AccidentCauseService) => {
    expect(service).toBeTruthy();
  }));
});
