import { TestBed, inject } from '@angular/core/testing';

import { AccidentTypeService } from './accident-type.service';

describe('AccidentTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccidentTypeService]
    });
  });

  it('should be created', inject([AccidentTypeService], (service: AccidentTypeService) => {
    expect(service).toBeTruthy();
  }));
});
