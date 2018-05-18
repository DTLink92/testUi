import { TestBed, inject } from '@angular/core/testing';

import { PositionTypeEvaluatorService } from './position-type-evaluator.service';

describe('PositionTypeEvaluatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionTypeEvaluatorService]
    });
  });

  it('should be created', inject([PositionTypeEvaluatorService], (service: PositionTypeEvaluatorService) => {
    expect(service).toBeTruthy();
  }));
});
