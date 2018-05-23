import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';
import {Item} from '../shared/item';
import {Equipment} from '../shared/equipment';

@Injectable()
export class EquipmentService {

  constructor(private http: HttpClient) {
    }
    getEquipments(): Observable<any> {
    return this.http.get(baseURL + 'equipments')
      .map((res) => {
        return res;
      });
    }
  getEquipment(id: number): Observable<Equipment> {
    return this.http.get<Equipment>(baseURL + 'equipments/' + id)
      .map(res => {
        return res;
      });
  }
  getFeaturedEquipment(): Observable<Equipment> {
    return this.http.get<Item>(baseURL + 'equipments?featured=true')
      .map(res => {
        return res[0];
      });
  }
  getEquipmentIds(): Observable<number[]> {
    return this.getEquipments()
      .map(equipments => {
        return equipments.map(equipment => equipment.id);
      });
  }
}
