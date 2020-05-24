import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoveredSurfaceItem } from 'src/model/line-area/covered/CoveredSurfaceItem';
import { TotalSurfaceItem } from 'src/model/line-area/total/TotalSurfaceItem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getCoveredSurface() {
    let params = new HttpParams();
    params.append("range", "1000");
    params.append("surface", "covered");

    return this.http.get<CoveredSurfaceItem[]>(`${environment.baseUrl}/prices`, {params})
  }

  getCoveredSurfaceMock(): Observable<CoveredSurfaceItem[]> {
    return new Observable((observer) => {
      observer.next(
        [
          new CoveredSurfaceItem(100, 200000),
          new CoveredSurfaceItem(150, 225000),
          new CoveredSurfaceItem(200, 300000),
          new CoveredSurfaceItem(250, 320000),
          new CoveredSurfaceItem(300, 410000),
          new CoveredSurfaceItem(350, 450000),
          new CoveredSurfaceItem(400, 470000),
          new CoveredSurfaceItem(450, 500000)
        ]
      );
    })
  }

  getTotalSurface(): Observable<TotalSurfaceItem[]> {
    let params = new HttpParams();
    params.append("range", "1000");
    params.append("surface", "total");

    return this.http.get<TotalSurfaceItem[]>(`${environment.baseUrl}/prices`, {params})
  }

  getTotalSurfaceMock(): Observable<TotalSurfaceItem[]> {
    return new Observable((observer) => {
      observer.next(
        [
          new TotalSurfaceItem(300, 200000),
          new TotalSurfaceItem(350, 225000),
          new TotalSurfaceItem(400, 300000),
          new TotalSurfaceItem(450, 320000),
          new TotalSurfaceItem(500, 410000),
          new TotalSurfaceItem(550, 450000),
          new TotalSurfaceItem(600, 470000),
          new TotalSurfaceItem(650, 500000)
        ]
      );
    });
  }

}
