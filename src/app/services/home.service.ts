import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Home, HomeCreate, ImageCreate } from '../models/home.interface';
import { PagerRequest, PaginateHome } from '../models/pager.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url:string = "https://localhost:7235/api/"

  constructor(private http:HttpClient) {}

  createHome(homeCreate: HomeCreate): Observable<ApiResponse>{
      let address = this.url + "Home";
      return this.http.post<ApiResponse>(address, homeCreate);
  }

  getAllHomes(pager:PagerRequest):Observable<PaginateHome>{
    let address = `${this.url}Home/GetAllHomes?pageNumber=${pager.pageNumber}&registerPage=${pager.registerPage}&filter=${pager.filter}`
    return this.http.get<PaginateHome>(address);
  }

  getAllHomesFavorites(pager:PagerRequest):Observable<PaginateHome>{
    let address = `${this.url}Home/GetHomeFavorite?pageNumber=${pager.pageNumber}&registerPage=${pager.registerPage}&filter=${pager.filter}`
    return this.http.get<PaginateHome>(address);
  }

  getHomeById(id:any):Observable<Home>{
    let address = `${this.url}Home/GetHomeById/${id}`
    return this.http.get<Home>(address);
  }

  editHome(form: Home): Observable<any>{
    let address = this.url + "Home";
    return this.http.put<any>(address, form);
  }

  editHomeStatus(id:string ): Observable<any>{
    let address = `${this.url}Home/UpdateStatus/${id}`
    return this.http.get<any>(address);
  }

  editHomeFavorite(id:string ): Observable<any>{
    let address = `${this.url}Home/UpdateFavorite/${id}`
    return this.http.get<any>(address);
  }

  deleteHome(id:string):Observable<void>{
    let address = `${this.url}Home/${id}`
    return this.http.delete<void>(address);
  }

  uploadImage(imageCreate: any): Observable<any>{
    let address = this.url + "Home/UploadImages";
    return this.http.post<any>(address, imageCreate);
  }

}
