import { HttpClient,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {RootObject} from '../models/weatherData.model'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<RootObject>{
    return this.http.get<RootObject>("https://api.weatherapi.com/v1/current.json?key=907e5e572ad040f48df91032230201&"+"q="+cityName);
  }
}
