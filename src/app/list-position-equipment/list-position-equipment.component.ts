import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DetailAssignEquipmentService} from '../services/detail-assign-equipment.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AssignEquipmentService} from '../services/assign-equipment.service';
import {PositionService} from '../services/position.service';

@Component({
  selector: 'app-list-position-equipment',
  templateUrl: './list-position-equipment.component.html',
  styleUrls: ['./list-position-equipment.component.scss']
})
export class ListPositionEquipmentComponent implements OnInit {

  positions: Array<any>;
  sub: Subscription;
  url: any = {};
  displayedColumns;

  constructor(private route: ActivatedRoute, private router: Router,
              private positionService: PositionService,
  ) { }

  ngOnInit() {
    this.displayedColumns = ['id', 'namePosition', 'viewDetail'];
    this.positionService.getAll().subscribe(data => {
      this.positions = data;
    });
  }

}
