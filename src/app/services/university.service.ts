import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(
    private http : HttpClient
  ) { }

  public getUniversities():Observable<any>{
    return this.http.get(Constants.baseUrl+"universities");
  }

  save(data:any):Observable<any>{
    return this.http.post(Constants.baseUrl+"universities",data);
  }

  changeState(data:any):Observable<any>{
    return this.http.post(Constants.baseUrl+"universities/change-state",data);
  }
}
