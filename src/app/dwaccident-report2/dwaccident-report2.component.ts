import { Component, OnInit } from '@angular/core';
import {DWAccident} from '../shared/dwaccident';
import {DwaccidentService} from '../services/dwaccident.service';
import {DWEquipment} from '../shared/dwequipment';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-dwaccident-report2',
  templateUrl: './dwaccident-report2.component.html',
  styleUrls: ['./dwaccident-report2.component.scss']
})
export class DwaccidentReport2Component implements OnInit {

  dwequiptments: Array<DWEquipment>;
  dwaccidents: Array<DWAccident>;
  positionSelectedId: any = {};
  redirectString: string;

  sub: Subscription;
  constructor(private dwaccidentservice: DwaccidentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.dwaccidentservice.getEquipments().subscribe(data => {
      this.dwequiptments = data;
    });
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id ) {
        this.dwaccidentservice.getEquipmentsSearch(id).subscribe(data => {
          this.dwaccidents = data;
        });
      }
    });
  }
  loadData(id) {
    this.gotoList(id);
  }
  gotoList(id) {
    this.redirectString = '/accident-report2/' + id;
    this.router.navigate([this.redirectString]);
  }
}
