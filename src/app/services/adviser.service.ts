import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Adviser } from "../models/home.interface";
import { environment } from "../enviroments/environment";
import { HttpClient } from "@angular/common/http";
import { AdviserDto } from "../models/Adviser";



@Injectable({
  providedIn: 'root'
})
export class AdviserService {

  constructor(private http: HttpClient) {
  }

  getAdvisersByZone(zone: string): Observable<Adviser[]> {
    let address = `${environment.server_api}/Adviser/AdvisersByZone?zone=${zone}`
    return this.http.get<Adviser[]>(address);
  }

  getZonesByAdviser(adviserId: number | undefined): Observable<Adviser[]> {
    let address = `${environment.server_api}/Adviser/ZonesByAdviser?adviserId=${adviserId}`
    return this.http.get<Adviser[]>(address);
  }

  getAdvisers(): Observable<AdviserDto[]> {
    let address = `${environment.server_api}/Adviser`
    return this.http.get<AdviserDto[]>(address);
  }

  createAdviser(adviserData: any): Observable<any> {
    let address = `${environment.server_api}/adviser`
    return this.http.post<any>(address, adviserData);
  }

  editAdviser(adviserData: any): Observable<any> {
    let address = `${environment.server_api}/adviser`
    return this.http.put<any>(address, adviserData);
  }

  deletedAdviser(adviseId: number): Observable<any> {
    let address = `${environment.server_api}/adviser/${adviseId}`
    return this.http.delete<any>(address);
  }

}