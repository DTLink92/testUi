import { TestBed, inject } from '@angular/core/testing';

import { PositionEquipmentService } from './position-equipment.service';

describe('PositionEquipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PositionEquipmentService]
    });
  });

  it('should be created', inject([PositionEquipmentService], (service: PositionEquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
