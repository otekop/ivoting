import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(
    private http: HttpClient
  ) { }

  loadVoteData(university:any):Observable<any>{
    return this.http.post(Constants.baseUrl+"vote/load",university);
  }

  loadPositions(university:string):Observable<any>{
    return this.http.post(Constants.baseUrl+"vote/positions",university);
  }

  vote(data:any):Observable<any>{
    return this.http.post(Constants.baseUrl+"vote",data,{responseType:'text'});
  }

  loadResults(university:string):Observable<any>{
    return this.http.get(Constants.baseUrl+"vote/results?university="+university);
  }
}
