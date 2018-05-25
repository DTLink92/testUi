import {Component, Inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  constructor(@Inject('BaseURL') public BaseURL) {
  }

  ngOnInit() {
  }
}
