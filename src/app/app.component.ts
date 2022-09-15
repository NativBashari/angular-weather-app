import { Component, OnInit } from '@angular/core';
import { RootObject} from './models/weatherData.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-weather-app';
  weatherData?: RootObject;
  cityName: string ="London";
 
  constructor(private service: WeatherService) {
    

  }
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = "";
    
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = "";

  }
  private getWeatherData(cityName: string){
    this.service.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        console.log(response);
        this.weatherData = response as RootObject;
      } 
    })

  }
}
