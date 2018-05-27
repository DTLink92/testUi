import { TestBed, inject } from '@angular/core/testing';

import { TypeEquipmentService } from './type-equipment.service';

describe('TypeEquipmentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeEquipmentService]
    });
  });

  it('should be created', inject([TypeEquipmentService], (service: TypeEquipmentService) => {
    expect(service).toBeTruthy();
  }));
});
