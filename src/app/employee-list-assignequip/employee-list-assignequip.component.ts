import { Component, OnInit } from '@angular/core';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {EmployeeService} from '../services/employee.service';

@Component({
  selector: 'app-employee-list-assignequip',
  templateUrl: './employee-list-assignequip.component.html',
  styleUrls: ['./employee-list-assignequip.component.scss']
})
export class EmployeeListAssignequipComponent implements OnInit {

  assignEquips: Array<any>;

  constructor(private assignEquipService: AssignEquipmentService, employeeService: EmployeeService) { }

  ngOnInit() {
    this.assignEquipService.getAssignEquipments().subscribe(data => {
      this.assignEquips = data;
    });
  }

}
