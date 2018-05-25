import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {
   public projects: string[];

  constructor() {
    this.projects = ['proyecto 1', ' proyecto2', 'proyecto3'];
  }

  ngOnInit() {
  }

}
