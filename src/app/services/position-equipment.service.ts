import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {AssignEquipment} from '../shared/assignEquipment';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PositionEquipment} from '../shared/positionEquipment';

@Injectable()
export class PositionEquipmentService {
  public PROFILE_API = baseURL + 'position_equipment';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getPositionEquipments(): Observable<any> {
    return this.http.get(this.PROFILE_API)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getPositionEquipment(id: number): Observable<AssignEquipment> {
    return this.http.get<AssignEquipment>(this.PROFILE_API + '/' + id)
      .map(res => {
        return res;
      });
  }

  save(positionEquip: any): Observable<any> {
    let result: Observable<Object>;
    if (positionEquip['id']) {
      result = this.http.put(this.PROFILE_API, positionEquip);
    } else {
      result = this.http.post(this.PROFILE_API, positionEquip);
    }
    return result;
  }

  createPositionEquipment(positionEquip: PositionEquipment): Observable<PositionEquipment> {
    return this.http.post<any>(this.PROFILE_API, positionEquip, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  updatePositionEquipment(positionEquip: PositionEquipment): Observable<PositionEquipment> {
    return this.http.post<any>(this.PROFILE_API + '/' + positionEquip.id, positionEquip, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  /*remove(id) {
    const url = `${this.PROFILE_API}/${id}`;
    console.log('entro aqui remove service ' + url);
    return this.http.delete( url);
  }*/

}
