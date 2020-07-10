import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { PredictionRequest } from 'src/model/PredictionRequest';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getZones(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/zones`);
  }

  predict(prediction: PredictionRequest) {
    return this.http.post(`${this.baseUrl}/predict`, prediction);
  }
}
