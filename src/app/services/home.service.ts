import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home, HomeCreate } from '../models/home.interface';
import { PagerRequest, PaginateHome } from '../models/pager.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url:string = "https://localhost:7235/api/"

  constructor(private http:HttpClient) {}

  createHome(homeCreate: HomeCreate): Observable<HomeCreate>{
      let address = this.url + "Home";
      return this.http.post<any>(address, homeCreate);
  }

  getAllHomes(pager:PagerRequest):Observable<PaginateHome>{
    let address = `${this.url}Home/GetAllHomes?pageNumber=${pager.pageNumber}&registerPage=${pager.registerPage}&filter=${pager.filter}`
    return this.http.get<PaginateHome>(address);
  }

  getHomeById(id:any):Observable<Home>{
    let address = `${this.url}Home/GetHotelById/${id}`
    return this.http.get<Home>(address);
  }

}
