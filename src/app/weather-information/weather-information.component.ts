import { Component, OnInit } from '@angular/core';
import { WeatherModel } from '../shared/weather.model';
import { WeatherService } from '../shared/weather.service';
import { AirQualityModel } from '../shared/air-quality.model';

@Component({
  selector: 'app-weather-information',
  templateUrl: './weather-information.component.html',
  styleUrls: ['./weather-information.component.css']
})
export class WeatherInformationComponent implements OnInit {

  weatherInfoData!: WeatherModel;
  airQualityInfoData!: AirQualityModel;

  constructor(private weatherService: WeatherService, private airQualityService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherData('Copenhagen').subscribe(
      weatherInfoResponse => {
        this.weatherInfoData = weatherInfoResponse;
        console.log(weatherInfoResponse);
      }
    );

    this.airQualityService.getAirQualityData('Copenhagen').subscribe(
      airQualityInfoResponse => {
        this.airQualityInfoData = airQualityInfoResponse;
        console.log(this.airQualityInfoData);
      }
    );
    
  }

}
