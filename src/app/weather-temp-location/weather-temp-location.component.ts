import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../shared/weather.service';
import { WeatherModel } from '../shared/weather.model';

@Component({
  selector: 'app-weather-temp-location',
  templateUrl: './weather-temp-location.component.html',
  styleUrls: ['./weather-temp-location.component.css']
})
export class WeatherTempLocationComponent implements OnInit {

  weatherData!: WeatherModel;
  cityLocation: string = 'Mumbai';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeatherTempDatabyLocation(this.cityLocation);
    this.cityLocation = '';
  }

  private getWeatherTempDatabyLocation(locationName: string) {
    this.weatherService.getWeatherData(locationName).subscribe(
      weatherDataResponse => {
        this.weatherData = weatherDataResponse;
        console.log(weatherDataResponse);
      }
    );
  }

  onSubmit() {
    this.getWeatherTempDatabyLocation(this.cityLocation);
    this.cityLocation = '';
  }


}
