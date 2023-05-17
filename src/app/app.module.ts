import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherTempLocationComponent } from './weather-temp-location/weather-temp-location.component';
import { WeatherInformationComponent } from './weather-information/weather-information.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherTempLocationComponent,
    WeatherInformationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
