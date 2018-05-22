import { Component, OnInit } from '@angular/core';
import {PositionService} from '../services/position.service';
import {PositionRecruitmentProfileService} from '../services/position-recruitment-profile.service';
import {Position} from '../shared/position';
@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {

  positions: Array<Position>;

  constructor(private positionService: PositionService, private profileService: PositionRecruitmentProfileService) { }

  ngOnInit() {
    this.positionService.getAll().subscribe(data => {
      this.positions = data;
    });
  }
}
