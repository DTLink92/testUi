import { TestBed, inject } from '@angular/core/testing';

import { EmployeeAccidentService } from './employee-accident.service';

describe('EmployeeAccidentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeAccidentService]
    });
  });

  it('should be created', inject([EmployeeAccidentService], (service: EmployeeAccidentService) => {
    expect(service).toBeTruthy();
  }));
});
