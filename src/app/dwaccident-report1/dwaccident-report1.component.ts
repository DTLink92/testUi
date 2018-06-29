import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {PositionReport} from '../shared/PositionReport';
import {ActivatedRoute, Router} from '@angular/router';
import {PositionService} from '../services/position.service';
import {DWAccident} from '../shared/dwaccident';

@Component({
  selector: 'app-dwaccident-report1',
  templateUrl: './dwaccident-report1.component.html',
  styleUrls: ['./dwaccident-report1.component.scss']
})
export class DwaccidentReport1Component implements OnInit {

  dwaccidents: Array<DWAccident>;
  positionSelectedId: any = {};
  sub: Subscription;
  dwaccident: any = {};
  higherPosition: any = {};
  employees: Array<PositionReport>;
  redirectString: string;
  total: number;
  constructor(private dwaccidentservice: PositionService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.dwaccidentservice.getAll().subscribe(data => {
      this.dwaccidents = data;
    });
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.positionSelectedId = id;
        /*this.dwaccidentservice.getType(id).subscribe(position => {
          this.dwaccident = position;
          for (const high of this.dwaccidents) {
            if ( high.id === position.higherWorkPosition) {
              this.higherPosition = high;
              break;
            }
          }
        });
        this.dwaccidentservice.getContracts(id).subscribe(result => {
          this.employees = result;
          this.total = 0;
          for ( const empl of this.employees ) {
            this.total = this.total + 1 ;
          }
        });*/
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
