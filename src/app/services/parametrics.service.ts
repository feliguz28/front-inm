import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayParametric, UseParametric } from '../models/parametric.interface';

@Injectable({
  providedIn: 'root'
})
export class ParametricsService {

  url:string = "https://localhost:7235/api/"

  constructor(private http:HttpClient){}

  getHomeStates(): Observable<ArrayParametric>{
    let address = this.url + "HomeStates";
    return this.http.get<ArrayParametric>(address);
  }

  getHomeTypes(): Observable<ArrayParametric>{
    let address = this.url + "HomeTypes";
    return this.http.get<ArrayParametric>(address);
  }

  getVia(): Observable<ArrayParametric>{
    let address = this.url + "Via";
    return this.http.get<ArrayParametric>(address);
  }

  getZone(): Observable<ArrayParametric>{
    let address = this.url + "Zone";
    return this.http.get<ArrayParametric>(address);
  }

  getCategories(): Observable<ArrayParametric>{
    let address = this.url + "Category";
    return this.http.get<ArrayParametric>(address);
  }

}
