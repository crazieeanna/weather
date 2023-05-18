import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environment/environment";


@Injectable()
export class WeatherService {

    constructor(private http: HttpClient) {}

    getWeatherData(locationName: string) {
        this.http.get(environment.weatherURL, {
            params: new HttpParams()
            .set('q', locationName)
            .set('appid', 'bbb7b8bade96fa2c14fb3d03e8e2957c')
            .set('units', 'metric')
        });
    }
}