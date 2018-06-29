import { Component, OnInit } from '@angular/core';
import {DwaccidentService} from '../services/dwaccident.service';
import {DWAccident} from '../shared/dwaccident';

@Component({
  selector: 'app-dwaccident-report1',
  templateUrl: './dwaccident-report1.component.html',
  styleUrls: ['./dwaccident-report1.component.scss']
})
export class DwaccidentReport1Component implements OnInit {

  dwaccidents: Array<DWAccident>;
  constructor(private dwaccidentservice: DwaccidentService) { }

  ngOnInit() {
    this.dwaccidentservice.getAll().subscribe(data => {
      this.dwaccidents = data;
    });
  }
}
