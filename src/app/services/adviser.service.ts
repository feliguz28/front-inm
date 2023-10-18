import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Adviser } from "../models/home.interface";
import { environment } from "../enviroments/environment";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn: 'root'
  })
export class AdviserService{

    constructor(private http:HttpClient){

    }

    getAdvisersByZoneId(zoneId:number):Observable<Adviser[]>{
        let address = `${environment.server_api}/adviser?zoneId=${zoneId}`
        return this.http.get<Adviser[]>(address);
      }
}