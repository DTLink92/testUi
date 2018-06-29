import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {baseURL} from '../shared/baseurl';

@Injectable()
export class DwaccidentService {

  public DWACCIDENT_API = baseURL + 'DWAccidents';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',

    })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.DWACCIDENT_API);
  }

  getAreas(): Observable<any> {
    return this.http.get(this.DWACCIDENT_API + '/DWAreas');
  }

  getEquipments(): Observable<any> {
    return this.http.get(this.DWACCIDENT_API + '/DWEquipments');
  }

  getAreasSearch(id: number): Observable<any> {
    return this.http.get(this.DWACCIDENT_API + '/DWAreas/' + id);
  }

  getEquipmentsSearch(id: number): Observable<any> {
    return this.http.get(this.DWACCIDENT_API + '/DWEquipments/' + id);
  }

}

