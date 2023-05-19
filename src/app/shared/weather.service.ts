import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment/environment";
import { WeatherModel } from "./weather.model";
import { AirQualityModel } from "./air-quality.model";


@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) {}

    getWeatherData(locationName: string) {
        return this.http.get<WeatherModel>(environment.weatherURL, {
            params: new HttpParams()
            .set('q', locationName)
            .set('appid', 'bbb7b8bade96fa2c14fb3d03e8e2957c')
            .set('units', 'metric')
            .set('mode', 'json')
        });
    }

    getAirQualityData(locationName: string) {
        return this.http.get<AirQualityModel>(environment.airQualityURL, {
            params: new HttpParams()
            .set('city', locationName)
            .set('key', '09ed52819c0440ee9ccc14f69cc1fe65')
        });
    }
}