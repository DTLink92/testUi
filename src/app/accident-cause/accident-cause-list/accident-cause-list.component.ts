import {Component, Inject, OnInit} from '@angular/core';
import {EmployeeAccidentAddComponent} from '../../employee-accident/employee-accident-add/employee-accident-add.component';
import {EmployeeAccidentService} from '../../services/accident/employee-accident.service';
import {EmployeeService} from '../../services/employeeService/employee-service.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Employeeaccident} from '../../shared/employeeaccident';
import {AccidentCauseService} from '../../services/accident/accident-cause.service';

@Component({
  selector: 'app-accident-cause-list',
  templateUrl: './accident-cause-list.component.html',
  styleUrls: ['./accident-cause-list.component.scss']
})
export class AccidentCauseListComponent implements OnInit {

  public groups;
  public accidents;
  public accident_id;
  constructor(public dataService: AccidentCauseService,
              public accidentService: EmployeeAccidentService) {


  }


  ngOnInit() {
    this.dataService.getGroups().subscribe(value => {
      this.groups = value;
      console.log(this.groups);
      this.groups.forEach(function(k, v) {
        v.causes.forEach(function(key, val) {
          val.status = false;
        });
      });
    });
    this.accidentService.getAccidents().subscribe(value => {
      this.accidents = value;
    });

  }

  actualizar(data) {
    console.log('DEBUG >>>', data);
    this.dataService.update(data, this.accident_id);
  }

}
