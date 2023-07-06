import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
import { apiUri } from '../shared/const/apiUri';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(user:User) {
    return this.http.post(`${environment.server_api}${apiUri.login}`,user);
  }

}



