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

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherData('Copenhagen').subscribe(
      weatherDataResponse => {
        this.weatherData = weatherDataResponse;
        console.log(weatherDataResponse);
      }
    );
  }

}
