import { Injectable } from '@angular/core';
import {baseURL} from '../shared/baseurl';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DetailAssignEquipment} from '../shared/detailAssignEquipment';

@Injectable()
export class DetailAssignEquipmentService {

  public DAE_API = baseURL + 'detail_assignEquipment';
  headers: Headers;

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
      'Accept': 'q=0.8;application/json;q=0.9'
    })
  };

  getAll(): Observable<any> {
    return this.http.get(this.DAE_API)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  get(id: number): Observable<DetailAssignEquipment> {
    return this.http.get<DetailAssignEquipment>(this.DAE_API + '/' + id)
      .map(res => {
        return res;
      });
  }
  getByAssign(id): Observable<any> {
    return this.http.get(this.DAE_API + '/assignEquip/' + id);
  }

  reportEquipmentByAssign(): Observable<any> {
    return this.http.get<any>(this.DAE_API + '/equipmentByAssign')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  reportEquipmentByDateAssign(): Observable<any> {
    return this.http.get<any>(this.DAE_API + '/equipmentByDateAssign')
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  save(detailAssignEquip: any): Observable<any> {
    /*console.log('Entra a save detailassign');*/
    let result: Observable<Object>;
    if (detailAssignEquip['id']) {
      /*console.log('Entra a actualizar');*/
      result = this.http.put(this.DAE_API, detailAssignEquip);
    } else {
      /*console.log('Entra a post detailAssignEquip');
      console.log('ESTE ES EL ID DE ASSIGN: ' + detailAssignEquip['idAssignEquip']);*/
      result = this.http.post(this.DAE_API, detailAssignEquip);
    }
    return result;
  }

  createDetailAssignEquipment(detailAssignEquip: DetailAssignEquipment): Observable<DetailAssignEquipment> {
    return this.http.post<any>(this.DAE_API, detailAssignEquip, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  updateDetailAssingEquipment(detailAssignEquip: DetailAssignEquipment): Observable<DetailAssignEquipment> {
    return this.http.post<any>(this.DAE_API + '/' + detailAssignEquip.id, detailAssignEquip, this.httpOptions)
      .map((res) => {
        return res;
      }).catch(error => {
        return error;
      });
  }

  remove(id: number) {
    const url = `${this.DAE_API}/${id}`;
    return this.http.delete( url);
  }

}
