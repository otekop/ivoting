import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private http:HttpClient
  ) { }

  getAll():Observable<any>{
    return this.http.get(Constants.baseUrl+"positions");
  }

  save(data:any):Observable<any>{
    return this.http.post(Constants.baseUrl+"positions",data);
  }

  delete(id:number):Observable<any>{
    return this.http.delete(Constants.baseUrl+"positions/"+id);
  }
}
