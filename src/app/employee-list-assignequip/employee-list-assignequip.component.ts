import { Component, OnInit } from '@angular/core';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {EmployeeService} from '../services/employeeService/employee-service.service';

@Component({
  selector: 'app-employee-list-assignequip',
  templateUrl: './employee-list-assignequip.component.html',
  styleUrls: ['./employee-list-assignequip.component.scss']
})
export class EmployeeListAssignequipComponent implements OnInit {

  assignEquips: Array<any>;
  displayedColumns;
  constructor(private assignEquipService: AssignEquipmentService, employeeService: EmployeeService) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'fullName', 'assignDate', 'description', 'giveEquip', 'editAssign'];
    this.assignEquipService.getAssignEquipments().subscribe(data => {
      this.assignEquips = data;
    });
  }

}
