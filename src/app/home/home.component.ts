import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  item: Item;

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.item = this.itemService.getFeaturedItem();
  }

}
