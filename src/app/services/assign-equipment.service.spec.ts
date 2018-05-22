import { TestBed, inject } from '@angular/core/testing';

import { AssignEquipmentService } from './assign-equipment.service';

describe('AssignEquipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AssignEquipmentService]
    });
  });

  it('should be created', inject([AssignEquipmentService], (service: AssignEquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
