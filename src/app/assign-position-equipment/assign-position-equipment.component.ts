import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {EmployeeService} from '../services/employeeService/employee-service.service';
import {DetailAssignEquipmentService} from '../services/detail-assign-equipment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {EquipmentService} from '../services/equipment.service';
import {PositionService} from '../services/position.service';
import {PositionEquipmentService} from '../services/position-equipment.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-assign-position-equipment',
  templateUrl: './assign-position-equipment.component.html',
  styleUrls: ['./assign-position-equipment.component.scss']
})
export class AssignPositionEquipmentComponent implements OnInit {

  position: any = {};
  sub: Subscription;
  url: any = {};
  equipments: Array<any>;
  positionEquipment: any = {};
  selectedOption: any = {};

  constructor(private route: ActivatedRoute, private router: Router,
              private positionService: PositionService,
              private equipmentService: EquipmentService,
              private positionEquipmentService: PositionEquipmentService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = this.route.snapshot.url[0].toString();
      const id = params['id'];
      const idPos = params['idPos'];
      const idPeq = params['idPeq'];
      if (id) {
        this.positionService.getType(id).subscribe((position: any) => {
          if (position) {
            this.position = position;
            this.selectedOption = this.position.id;
          } else {
            this.gotoList();
          }
        });
      }

      if (idPos) {
        this.positionService.getType(idPos).subscribe((position: any) => {
          if (position) {
            this.position = position;
            this.selectedOption = this.position.id;
          } else {
            this.gotoList();
          }
        });
      }

      if (idPeq) {
        this.positionEquipmentService.get(idPeq).subscribe((posEquip: any) => {
          if (posEquip) {
            this.positionEquipment = posEquip;
            this.selectedOption = this.positionEquipment.idPosition;
          } else {
            this.gotoList();
          }
        });
      }
      this.equipmentService.getAll().subscribe(data => {
        this.equipments = data;
      });


    });
  }

  gotoList() {
    this.router.navigate(['/position-equipment-list']);
  }
  gotoListViewDetail() {
    this.router.navigate(['/detail-equipment-position' + '/' + this.position.id]);
  }

  save(form: NgForm) {
    this.positionEquipmentService.save(form).subscribe(result => {
      this.gotoListViewDetail();
    }, error => console.error(error));
  }

  remove(id) {
    this.positionEquipmentService.remove(id).subscribe(result => {
      this.gotoListViewDetail();
    }, error => console.error(error));
  }


}
