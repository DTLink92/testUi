import {Injectable} from '@angular/core';
import {Item} from '../shared/item';
import {ITEMS} from '../shared/items';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ItemService {

  constructor() {
  }

  getItems(): Promise<Item[]> {
    return Observable.of(ITEMS).delay(2000).toPromise();
  }

  getItem(id: number): Promise<Item> {
    return Observable.of(ITEMS.filter((item) => item.id === id)[0]).delay(2000).toPromise();
  }

  getFeaturedItem(): Promise<Item> {
    return Observable.of(ITEMS.filter((item) => item.featured)[0]).delay(2000).toPromise();
  }

}
