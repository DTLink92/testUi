import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {Employee} from '../shared/employee';
import {EmployeeService} from '../services/employee.service';
import {ItemService} from '../services/item.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  item: Item;
  employee: Employee;

  constructor(private itemService: ItemService,
              private employeeService: EmployeeService,
              public domSanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.employeeService.getFeaturedEmployee().subscribe(employee => {
      this.employee = employee;
    });
    this.itemService.getFeaturedItem().subscribe(item => {
      this.item = item;
    });
  }

}
