import { TestBed, inject } from '@angular/core/testing';

import { DwaccidentService } from './dwaccident.service';

describe('DwaccidentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DwaccidentService]
    });
  });

  it('should be created', inject([DwaccidentService], (service: DwaccidentService) => {
    expect(service).toBeTruthy();
  }));
});
