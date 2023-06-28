import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../enviroments/environment';
import { apiUri } from '../shared/const/apiUri';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // public login(usuario:Usuario) {
  //   return this.http.post(`${environment.server_api}${apiUri.login}`,usuario);
  // }

}
