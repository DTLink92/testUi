///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employeeService/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = [];
  constructor(private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

}

