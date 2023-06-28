import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeCreate } from '../models/home.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url:string = "https://bluesmartdevapi.azurewebsites.net/"

  constructor(private http:HttpClient) {}

  createHotel(form: HomeCreate): Observable<HomeCreate>{
      let address = this.url + "CreateHotel";
      return this.http.post<any>(address, form);
  }
}
