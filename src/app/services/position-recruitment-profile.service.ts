import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {baseURL} from '../shared/baseurl';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PositionRecruitmentProfileService {

  public PROFILE_API = baseURL + 'recruitmentProfiles';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.PROFILE_API);
  }
  getProfile(id: number): Observable<any> {
    console.log(this.PROFILE_API + '/' + id);
    return this.http.get(this.PROFILE_API + '/' + id);
  }

  getProfileByPositionId(id: number): Observable<any> {
    return this.http.get(this.PROFILE_API + '/position/' + id);
  }
  save(profile: any): Observable<any> {
    let result: Observable<Object>;
    if (profile['id']) {
      result = this.http.put(this.PROFILE_API, profile);
    } else {
      result = this.http.post(this.PROFILE_API, profile);
    }
    return result;
  }

  remove(id) {
    const url = `${this.PROFILE_API}/${id}`;
    console.log('entro aqui remove service ' + url);
    return this.http.delete( url);
  }
}
