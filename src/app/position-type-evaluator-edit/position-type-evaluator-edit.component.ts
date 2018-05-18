import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {PositionTypeEvaluatorService} from '../services/position-type-evaluator.service';

@Component({
  selector: 'app-position-type-evaluator-edit',
  templateUrl: './position-type-evaluator-edit.component.html',
  styleUrls: ['./position-type-evaluator-edit.component.scss']
})
export class PositionTypeEvaluatorEditComponent implements OnInit, OnDestroy {
  type: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router
              , private typeService: PositionTypeEvaluatorService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.typeService.getType(id).subscribe((type: any) => {
          if (type) {
            this.type = type;
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
    this.router.navigate(['/positionTypeEvaluatorList']);
  }
  save(form: NgForm) {
    this.typeService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  remove(id) {
    this.typeService.remove(id).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}
