import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employeeService/employee-service.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee = {};
  constructor(private employeeService: EmployeeService,
              private route: ActivatedRoute,
              private location: Location) { }
  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
      .subscribe(employee => {
        this.employee = employee;
      });
  }

}
