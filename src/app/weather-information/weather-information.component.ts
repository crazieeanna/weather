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
  cityLocation: string = 'Mumbai';
  airQualityInfoData!: AirQualityModel;

  constructor(private weatherService: WeatherService, private airQualityService: WeatherService) {}

  ngOnInit() {  
    this.getWeatherData(this.cityLocation);
    this.cityLocation = '';
  }

  private getWeatherData(location: string) {
    this.weatherService.getWeatherData(this.cityLocation).subscribe(
      weatherInfoResponse => {
        this.weatherInfoData = weatherInfoResponse;
        console.log(weatherInfoResponse);
      }
    );

    this.airQualityService.getAirQualityData(this.cityLocation).subscribe(
      airQualityInfoResponse => {
        this.airQualityInfoData = airQualityInfoResponse;
        console.log(this.airQualityInfoData);
      }
    );
  }

  onSubmit() {
    this.getWeatherData(this.cityLocation);
    this.cityLocation = '';
  }

}
