import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { User } from '../models/User';
import {environment} from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})

export class Loginservice {

  constructor(private http : HttpClient) { }

  validateLoginDetails(user:User){
window.sessionStorage.setItem("sigtpeaccess", JSON.stringify(user));
return this.http.get(environment.API_ADDRESS+":"+environment.API_PORT+environment.LOGIN,{observe:'response', withCredentials:true})
  }


}
