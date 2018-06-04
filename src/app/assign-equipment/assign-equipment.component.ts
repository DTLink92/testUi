import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {Employee} from '../shared/employee';
import {AssignEquipment} from '../shared/assignEquipment';
import {EmployeeService} from '../services/employeeService/employee-service.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-assign-equipment',
  templateUrl: './assign-equipment.component.html',
  styleUrls: ['./assign-equipment.component.scss']
})
export class AssignEquipmentComponent implements OnInit, OnDestroy  {

  assignEquip: any = {};
  sub: Subscription;
  url: any = {};
  employees: Array<any>;

  constructor(private route: ActivatedRoute, private router: Router,
              private assignEquipmentService: AssignEquipmentService,
              private employeeService: EmployeeService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = this.route.snapshot.url[0].toString();
      const id = params['id'];
      if (id) {
        this.assignEquipmentService.getAssignEquipment(id).subscribe((assignEquip: any) => {
          if (assignEquip) {
            this.assignEquip = assignEquip;
          } else {
            this.gotoList();
          }
        });
      }
      this.employeeService.getEmployees().subscribe(data => {
        this.employees = data;
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  gotoList() {
      this.router.navigate(['/employee-list-assignequip']);
  }

  save(form: NgForm) {
    this.assignEquipmentService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(id) {
    this.assignEquipmentService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
