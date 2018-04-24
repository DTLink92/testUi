import {Injectable} from '@angular/core';
import {Item} from '../shared/item';
import {ITEMS} from '../shared/items';

@Injectable()
export class ItemService {

  constructor() {
  }

  getItems(): Item[] {
    return ITEMS;
  }
}
