import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Home, HomeCreate, ImageCreate } from '../models/home.interface';
import { PagerRequest, PaginateHome } from '../models/pager.interface';
import { PagerRequestFilter } from '../models/pager-basic.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url:string = "https://bluesmartapi.somee.com/api/"

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

  getHomeFilter(pager: PagerRequestFilter, filterType: number | undefined): Observable<PaginateHome> {
    let address = '';
    let endPoint =''

    switch (filterType) {
      case 0:

        endPoint = 'getHomeFilterBasic'

        break;

      case 1:

        endPoint = 'getHomeFilterAdvanced'

        break;
    }

    address = `${this.url}Home/${endPoint}?pageNumber=${pager.pageNumber}&registerPage=${pager.registerPage}${this.mapParamsGet(pager)}`

    return this.http.get<PaginateHome>(address);
  }

  getHomeById(id:any):Observable<Home>{
    let address = `${this.url}Home/GetHomeById/${id}`
    return this.http.get<Home>(address);
  }

  getDistrictsHomes():Observable<string[]>{
    let address = `${this.url}Home/GetDistricts`
    return this.http.get<string[]>(address);
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

  mapParamsGet(pager: any):string{

    let params : string = '';
    const prop = Object.keys(pager);
    prop.forEach((p) => {

      if (typeof pager[p] === 'number') {
        if (pager[p]) {
          params = params + `&${p}=${pager[p]}`;
        }
      }
      if (typeof pager[p] === 'string') {
        if (pager[p] !== '' && pager[p] !== null) {
          params = params + `&${p}=${pager[p]}`;
        }
      }


    });
    return params;
  }

}
