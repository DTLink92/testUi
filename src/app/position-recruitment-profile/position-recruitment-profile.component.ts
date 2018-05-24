import {Component, OnDestroy, OnInit} from '@angular/core';
import { PositionRecruitmentProfileService } from '../services/position-recruitment-profile.service';
import { PositionService } from '../services/position.service';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-position-recruitment-profile',
  templateUrl: './position-recruitment-profile.component.html',
  styleUrls: ['./position-recruitment-profile.component.scss']
})
export class PositionRecruitmentProfileComponent implements OnInit, OnDestroy {

  profile: any = {};
  sub: Subscription;
  url: any = {};
  positions: Array<any>;
  id: string;
  redirectString: string;
  constructor(private route: ActivatedRoute, private router: Router
              , private profileService: PositionRecruitmentProfileService
              , private positionService: PositionService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = this.route.snapshot.url[0].toString();
      const id = params['id'];
      if (id) {
        this.id = id;
        this.profileService.getProfile(id).subscribe((profile: any) => {
          if (profile) {
            this.profile = profile;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
      const positionId = params['positionId'];
      if ( positionId ) {
        this.id = positionId;
        this.profile.position = positionId;
      }
      this.positionService.getAll().subscribe(data => {
        this.positions = data;
      });
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  gotoList() {
    this.redirectString = '/profileList';
    if ( this.url.includes('position-profile-edit' )) {
      this.redirectString = '/position-edit/' + this.profile.position;
    }
    if (this.url.includes('position-profile-add')) {
      this.redirectString = '/position-edit/' + this.id;
    }
    this.router.navigate([this.redirectString]);
  }
  save(form: NgForm) {
    this.profileService.save(form).subscribe(result => {
        this.gotoList();
    }, error => console.error(error));
  }
  remove(id) {
    this.profileService.remove(id).subscribe(result => {
      console.log('entro aqui remove');
      this.gotoList();
    }, error => console.error(error));
  }
}
