import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {AssignEquipment} from '../shared/assignEquipment';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PositionEquipment} from '../shared/positionEquipment';

@Injectable()
export class PositionEquipmentService {
  public PEQ_API = baseURL + 'position_equipment';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getAll(): Observable<any> {
    return this.http.get(this.PEQ_API)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  get(id: number): Observable<AssignEquipment> {
    return this.http.get<AssignEquipment>(this.PEQ_API + '/' + id)
      .map(res => {
        return res;
      });
  }

  getByPosition(id): Observable<any> {
    return this.http.get(this.PEQ_API + '/position/' + id);
  }

  save(positionEquip: any): Observable<any> {
    let result: Observable<Object>;
    if (positionEquip['id']) {
      result = this.http.put(this.PEQ_API, positionEquip);
    } else {
      result = this.http.post(this.PEQ_API, positionEquip);
    }
    return result;
  }

  createPositionEquipment(positionEquip: PositionEquipment): Observable<PositionEquipment> {
    return this.http.post<any>(this.PEQ_API, positionEquip, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  updatePositionEquipment(positionEquip: PositionEquipment): Observable<PositionEquipment> {
    return this.http.post<any>(this.PEQ_API + '/' + positionEquip.id, positionEquip, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  remove(id) {
    const url = `${this.PEQ_API}/${id}`;
    return this.http.delete( url);
  }

}
