import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DetailAssignEquipmentService} from '../services/detail-assign-equipment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {PositionService} from '../services/position.service';
import {PositionEquipment} from '../shared/positionEquipment';
import {PositionEquipmentService} from '../services/position-equipment.service';

@Component({
  selector: 'app-list-detail-positionequipment',
  templateUrl: './list-detail-positionequipment.component.html',
  styleUrls: ['./list-detail-positionequipment.component.scss']
})
export class ListDetailPositionequipmentComponent implements OnInit {

  position: any = {};
  positionEquipments: Array<any>;
  sub: Subscription;
  url: any = {};
  displayedColumns;

  constructor(private route: ActivatedRoute, private router: Router,
              private positionService: PositionService,
              private positionEquipmentService: PositionEquipmentService
            ) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'nameEquipment', 'editEquipment'];
    this.sub = this.route.params.subscribe(params => {
      this.url = this.route.snapshot.url[0].toString();
      const id = params['id'];
      if (id) {
        this.positionService.getType(id).subscribe((position: any) => {
          if (position) {
            this.position = position;
          } else {
            this.gotoList();
          }
        });
        this.positionEquipmentService.getByPosition(id).subscribe((detailAssign: any) => {
          if (detailAssign) {
            this.positionEquipments = detailAssign;
          } else {
            this.gotoList();
          }
        });
      }
    });

  }


  gotoList() {
    this.router.navigate(['/position-equipment-list']);
  }
  gotoListViewDetail() {
    this.router.navigate(['/detail-equipment-position' + '/' + this.position.id]);
  }

  remove(id) {
    this.positionEquipmentService.remove(id).subscribe(result => {
      this.gotoListViewDetail();
    }, error => console.error(error));

    this.gotoListViewDetail();
  }

}
