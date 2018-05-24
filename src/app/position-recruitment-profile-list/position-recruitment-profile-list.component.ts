import { Component, OnInit } from '@angular/core';
import {PositionRecruitmentProfileService} from '../services/position-recruitment-profile.service';
import { PositionService } from '../services/position.service';
@Component({
  selector: 'app-position-recruitment-profile-list',
  templateUrl: './position-recruitment-profile-list.component.html',
  styleUrls: ['./position-recruitment-profile-list.component.scss']
})
export class PositionRecruitmentProfileListComponent implements OnInit {
  profiles: Array<any>;
  constructor(private profileService: PositionRecruitmentProfileService, private positionService: PositionService) { }

  ngOnInit() {
      this.profileService.getAll().subscribe(data => {
        this.profiles = data;
      });
  }
}
