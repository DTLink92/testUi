import { Component, OnInit } from '@angular/core';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {AssignEquipment} from '../shared/assignEquipment';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';
import {EquipmentService} from '../services/equipment.service';
import {DetailAssignEquipmentService} from '../services/detail-assign-equipment.service';

@Component({
  selector: 'app-employee-list-withequip',
  templateUrl: './employee-list-withequip.component.html',
  styleUrls: ['./employee-list-withequip.component.scss']
})
export class EmployeeListWithequipComponent implements OnInit {
  assignEquip: any = {};
  detailAssignEquip: any = {};
  detailAssignEquips: Array<any>;
  sub: Subscription;
  url: any = {};
  displayedColumns;

  constructor(private route: ActivatedRoute, private router: Router,
              private assignEquipmentService: AssignEquipmentService,
              private detailAssignEquipmentService: DetailAssignEquipmentService,
              ) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'nameEquipment', 'editEquipment'];
    this.sub = this.route.params.subscribe(params => {
      this.url = this.route.snapshot.url[0].toString();
      const id = params['id'];
      if (id) {
        /*console.log('ESTE ES EL ID de Assign: ' + id);*/
        this.assignEquipmentService.getAssignEquipment(id).subscribe((assignEquip: any) => {
          if (assignEquip) {
            /*console.log('Se esta asignando data assign a assignEquip');*/
            this.assignEquip = assignEquip;
          } else {
            /*console.log(`No encuentra asignacionEquipo por ID`);*/
            this.gotoList();
          }
        });
        this.detailAssignEquipmentService.getByAssign(id).subscribe((detailAssign: any) => {
          this.detailAssignEquips = detailAssign;
        });
      }
    });

  }

  gotoList() {
    this.router.navigate(['/employee-list-assignequip']);
  }
  gotoListViewDetail() {
    this.router.navigate(['/view-detail-AssignEquip' + '/' + this.assignEquip.id]);
  }

  remove(id) {
    this.detailAssignEquipmentService.remove(id).subscribe(result => {
      this.gotoListViewDetail();
    }, error => console.error(error));
  }


}
