import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PredictionRequest } from 'src/model/PredictionRequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  predict(prediction: PredictionRequest) {
    return this.http.post(`${this.baseUrl}/predict`, prediction);
  }
}
