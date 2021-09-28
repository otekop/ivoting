import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Constants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  register(data: any): Observable<any> {
    return this.http.post(Constants.baseUrl + "register", data);
  }

  identity(force?: boolean): Observable<any> {
    let user = this.getUserFromStorage();

    if (force) {
      user = null;
    }

    if (user) {
      return of(user);
    } else {
      return this.getUser();
    }
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(Constants.baseUrl + 'auth', data);
  }

  getUser(): Observable<any> {
    return this.http.get(Constants.baseUrl + 'account');
  }

  saveUser(user: any) {
    localStorage.setItem(Constants.userKey, user);
  }

  removeUser() {
    localStorage.removeItem(Constants.userKey);
  }

  getUserFromStorage() {
    return localStorage.getItem(Constants.userKey);
  }

  changePassword(data: any): Observable<any> {
    return this.http.post(Constants.baseUrl + 'account/change-password', data);
  }

  saveToken(token:string){
    console.group("saving token");
    localStorage.setItem(Constants.jwtKey,token);
  }

  clearToken(){
    console.group("clearing tokens");
    localStorage.removeItem(Constants.jwtKey);
  }

  getToken(){
    return localStorage.getItem(Constants.jwtKey);
  }

}
