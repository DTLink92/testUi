import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionService } from '../services/position.service';
import {PositionRecruitmentProfileService} from '../services/position-recruitment-profile.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})

export class PositionComponent implements OnInit, OnDestroy {

  position: any = {};
  sub: Subscription;
  private positions: Array<any>;
  private areas: Array<any>;
  isParent: boolean;
  id: string;
  url: any = {};
  isAddForm: boolean;

  profiles: Array<any>;

  constructor(private route: ActivatedRoute, private router: Router
    , private positionService: PositionService, private profileService: PositionRecruitmentProfileService) { }

  ngOnInit() {
    this.positionService.getAllAreas().subscribe(data => {
      this.areas = data;
    });
    this.sub = this.route.params.subscribe(params => {
      this.url = this.route.snapshot.url[0].toString();
      const id = params['id'];
      if (id) {
        this.id = id;
        this.positionService.getType(id).subscribe((position: any) => {
          if (position) {
            this.position = position;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
        this.profileService.getProfileByPositionId(id).subscribe(data => {
          this.profiles = data;
        });
      }
      this.positionService.getAll().subscribe(data => {
        this.positions = data;
        if ( this.id != null ) {
          for (const pos of data) {
            if (pos.higherWorkPosition + '' === this.id) {
              this.isParent = true;
              break;
            }
          }
        }
      });
      if ( this.url.includes('position-add' )) {
        this.isAddForm = true;
      } else {
        this.isAddForm = false;
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  gotoList() {
    this.router.navigate(['/positionList']);
  }
  save(form: NgForm) {
    if (form['higherWorkPosition'] != null && form['area'] != null) {
      this.positionService.save(form).subscribe(result => {
        this.gotoList();
      }, error => console.error(error));
    } else {
      console.log('hay valores nulos');
    }
  }
  remove(id) {
    this.positionService.remove(id).subscribe(result => {
      console.log('entro aqui remove');
      this.gotoList();
    }, error => console.error(error));
  }
}

