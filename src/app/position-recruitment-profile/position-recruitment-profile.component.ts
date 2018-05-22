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
  constructor(private route: ActivatedRoute, private router: Router
              , private profileService: PositionRecruitmentProfileService
              , private positionService: PositionService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.url = this.route.snapshot.url[0].toString();
      const id = params['id'];
      if (id) {
        console.log(id);
        this.profileService.getProfile(id).subscribe((profile: any) => {
          if (profile) {
            this.profile = profile;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
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
    if ( this.url.includes('position' )) {
      this.router.navigate(['/positionList']);
    } else {
      this.router.navigate(['/profileList']);
    }
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
