import {Component, OnInit, ViewChild} from '@angular/core';
import { PositionTypeEvaluatorService} from '../services/position-type-evaluator.service';

@Component({
  selector: 'app-position-type-evaluator-list',
  templateUrl: './position-type-evaluator-list.component.html',
  styleUrls: ['./position-type-evaluator-list.component.scss']
})
export class PositionTypeEvaluatorListComponent implements OnInit {

  types: Array<any>;

  constructor(private typeService: PositionTypeEvaluatorService) { }

  ngOnInit() {
    this.typeService.getAll().subscribe(data => {
      this.types = data;
    });
  }

}

