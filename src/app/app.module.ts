import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { WeatherTempLocationComponent } from './weather-temp-location/weather-temp-location.component';
import { WeatherInformationComponent } from './weather-information/weather-information.component';
import { WeatherService } from './shared/weather.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTempLocationComponent,
    WeatherInformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
