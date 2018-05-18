import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { PositionService } from '../services/position.service';
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

  constructor(private route: ActivatedRoute, private router: Router
    , private positionService: PositionService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.positionService.getType(id).subscribe((position: any) => {
          if (position) {
            this.position = position;

            this.positionService.getAll().subscribe(data => {
                this.positions = data;
                console.log(data);
              },
              (error) => {
                console.log(error.error.message);
              });
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
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
    this.positionService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(id) {
    this.positionService.remove(id).subscribe(result => {
      console.log('entro aqui remove');
      this.gotoList();
    }, error => console.error(error));
  }
}

