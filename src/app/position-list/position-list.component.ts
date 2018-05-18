import { Component, OnInit } from '@angular/core';
import {PositionService} from '../services/position.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {

  private page: number = 0;
  private positions: Array<any>;

  constructor(private positionService: PositionService) { }

  ngOnInit() {
    this.getPositions();
  }

  getPositions() {
    this.positionService.getAll().subscribe(data => {
      this.positions = data;
      console.log(data);
    },
      (error) => {
      console.log(error.error.message);
      });
  }

}
