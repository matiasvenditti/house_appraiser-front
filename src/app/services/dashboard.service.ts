import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoveredSurfaceItem } from 'src/model/line-area/covered/CoveredSurfaceItem';
import { TotalSurfaceItem } from 'src/model/line-area/total/TotalSurfaceItem';
import { Observable } from 'rxjs';
import { BathroomItem } from 'src/model/line-area/bathroom/BathroomItem';
import { ZoneItem } from 'src/model/bar-chart/zone/ZoneItem';
import { AveragePriceItem } from 'src/model/bar-chart/average-price/AveragePriceItem';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getCoveredSurface() {
    let params = new HttpParams().append("surface", "covered");

    return this.http.get<CoveredSurfaceItem[]>(`${environment.baseUrl}/prices`, {params})
  }

  getTotalSurface(): Observable<TotalSurfaceItem[]> {
    let params = new HttpParams().append("surface", "total");

    return this.http.get<TotalSurfaceItem[]>(`${environment.baseUrl}/prices`, {params})
  }

  getBathroomPrices(): Observable<BathroomItem[]> {
    return this.http.get<BathroomItem[]>(`${environment.baseUrl}/prices/by-bathrooms`);
  }

  getHousesByZone(): Observable<ZoneItem[]> {
    let params = new HttpParams();
    params.append("group", "zone");

    return this.http.get<ZoneItem[]>(`${environment.baseUrl}/houses`)
  }

  getHousesByZoneMock(): Observable<ZoneItem[]> {
    return new Observable((observer) => {
      observer.next([
        new ZoneItem("Pilar", 65),
        new ZoneItem("Escobar", 80),
        new ZoneItem("San Isidro", 47),
        new ZoneItem("Palermo", 49),
        new ZoneItem("Belgrano", 43),
        new ZoneItem("Recoleta", 30)
      ])
    })
  }

  getAveragePriceByZone(range: string, top: number) {
    let params = new HttpParams();
    params = params.append("range", range);
    params = params.append("top", top.toString());

    return this.http.get<AveragePriceItem[]>(`${environment.baseUrl}/prices/by-zone`, {params})
  }

}
