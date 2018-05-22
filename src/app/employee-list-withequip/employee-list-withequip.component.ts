import { Component, OnInit } from '@angular/core';
import {EmployeeAssignEquipment} from '../shared/assignEquipment';
import {AssignEquipmentService} from '../services/assign-equipment.service';

@Component({
  selector: 'app-employee-list-withequip',
  templateUrl: './employee-list-withequip.component.html',
  styleUrls: ['./employee-list-withequip.component.scss']
})
export class EmployeeListWithequipComponent implements OnInit {
  assignEquipmets: Array<EmployeeAssignEquipment>;
  constructor(private assignEquipmentService: AssignEquipmentService) { }

  ngOnInit() {
    this.getListAssignEquip();
  }
  getListAssignEquip() {
    this.assignEquipmentService.getAssignEquipments().subscribe(data => {
        this.assignEquipmets = data;
        console.log(data);
      },
      (error) => {
        console.log(error.error.message);
      });
  }
}
