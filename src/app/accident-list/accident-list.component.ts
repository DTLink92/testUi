import { Component, OnInit } from '@angular/core';
import {AccidentService} from '../services/accident-register/accident.service';

@Component({
  selector: 'app-accident-list',
  templateUrl: './accident-list.component.html',
  styleUrls: ['./accident-list.component.scss']
})
export class AccidentListComponent implements OnInit {
  accidents = [];
  constructor(private accidentService: AccidentService) { }

  ngOnInit() {
    this.accidentService.getAccidents().subscribe(data => {
      this.accidents = data;
    });
  }

}
