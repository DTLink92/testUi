import { TestBed, inject } from '@angular/core/testing';

import { DetailAssignEquipmentService } from './detail-assign-equipment.service';

describe('DetailAssignEquipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailAssignEquipmentService]
    });
  });

  it('should be created', inject([DetailAssignEquipmentService], (service: DetailAssignEquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
