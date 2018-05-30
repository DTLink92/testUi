import { Component, OnInit } from '@angular/core';
import {Position} from '../shared/position';
import {PositionService} from '../services/position.service';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {PositionReport} from '../shared/PositionReport';

@Component({
  selector: 'app-position-employee-report',
  templateUrl: './position-employee-report.component.html',
  styleUrls: ['./position-employee-report.component.scss']
})
export class PositionEmployeeReportComponent implements OnInit {

  positions: Array<Position>;
  positionSelectedId: any = {};
  sub: Subscription;
  position: any = {};
  higherPosition: any = {};
  employees: Array<PositionReport>;
  redirectString: string;
  total: number;
  constructor(private positionService: PositionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.positionService.getAll().subscribe(data => {
      this.positions = data;
    });
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.positionSelectedId = id;
        this.positionService.getType(id).subscribe(position => {
          this.position = position;
          for (const high of this.positions) {
            if ( high.id === position.higherWorkPosition) {
              this.higherPosition = high;
              break;
            }
          }
        });
        this.positionService.getContracts(id).subscribe(result => {
          this.employees = result;
          this.total = 0;
          for ( const empl of this.employees ) {
            this.total = this.total + 1 ;
          }
        });
      }
    });
  }
  gotoList(id) {
    this.redirectString = '/position-report/' + id;
    this.router.navigate([this.redirectString]);
  }
  loadData(id) {
    this.gotoList(id);
  }
}
