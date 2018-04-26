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

  getItems(): Observable<Item[]> {
    return Observable.of(ITEMS).delay(2000);
  }

  getItem(id: number): Observable<Item> {
    return Observable.of(ITEMS.filter((item) => item.id === id)[0]).delay(2000);
  }

  getFeaturedItem(): Observable<Item> {
    return Observable.of(ITEMS.filter((item) => item.featured)[0]).delay(2000);
  }

}
