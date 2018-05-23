import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {AssignEquipment} from '../shared/assignEquipment';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DetailAssignEquipment} from '../shared/detailAssignEquipment';

@Injectable()
export class DetailAssignEquipmentService {

  public PROFILE_API = baseURL + 'detail_assignEquipment';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getDetailAssignEquipments(): Observable<any> {
    return this.http.get(this.PROFILE_API)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  getDetailAssignEquipment(id: number): Observable<AssignEquipment> {
    return this.http.get<AssignEquipment>(this.PROFILE_API + '/' + id)
      .map(res => {
        return res;
      });
  }

  save(detailAssignEquip: any): Observable<any> {
    let result: Observable<Object>;
    if (detailAssignEquip['id']) {
      result = this.http.put(this.PROFILE_API, detailAssignEquip);
    } else {
      result = this.http.post(this.PROFILE_API, detailAssignEquip);
    }
    return result;
  }

  createDetailAssignEquipment(detailAssignEquip: DetailAssignEquipment): Observable<DetailAssignEquipment> {
    return this.http.post<any>(this.PROFILE_API, detailAssignEquip, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  updateDetailAssingEquipment(detailAssignEquip: DetailAssignEquipment): Observable<DetailAssignEquipment> {
    return this.http.post<any>(this.PROFILE_API + '/' + detailAssignEquip.id, detailAssignEquip, this.httpOptions)
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
