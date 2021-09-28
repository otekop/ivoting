import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class CandidatesService {

  constructor(
    private http:HttpClient
  ) { }

  getAllByUniversity(universityCode:string):Observable<any>{
    return this.http.get(Constants.baseUrl+"candidates/"+universityCode);
  }

  getAll():Observable<any>{
    return this.http.get(Constants.baseUrl+"candidates");
  }

  changeState(data:any):Observable<any>{
    return this.http.put(Constants.baseUrl+"candidates",data);
  }


}
