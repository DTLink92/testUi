import { Component, OnInit } from '@angular/core';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {AssignEquipment} from '../shared/assignEquipment';

@Component({
  selector: 'app-employee-list-withequip',
  templateUrl: './employee-list-withequip.component.html',
  styleUrls: ['./employee-list-withequip.component.scss']
})
export class EmployeeListWithequipComponent implements OnInit {
  assignEquipmets: Array<AssignEquipment>;
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
