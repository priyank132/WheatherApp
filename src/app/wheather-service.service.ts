import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { format } from 'url';


export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: number;
}

export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WheatherReport {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}

/*{
  "coord":{
     "lon":-149.89,
     "lat":61.22
  },
  "weather":[
     {
        "id":500,
        "main":"Rain",
        "description":"light rain",
        "icon":"10n"
     }
  ],
  "base":"stations",
  "main":{
     "temp":37.4,
     "pressure":1020,
     "humidity":93,
     "temp_min":37.4,
     "temp_max":37.4
  },
  "visibility":16093,
  "wind":{
     "speed":3.06,
     "deg":149.5
  },
  "clouds":{
     "all":75
  },
  "dt":1524808560,
  "sys":{
     "type":1,
     "id":18,
     "message":0.0126,
     "country":"US",
     "sunrise":1524837655,
     "sunset":1524894908
  },
  "id":420003442,
  "name":"Anchorage",
  "cod":200
}*/

@Injectable()
export class WheatherServiceService {

  static ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

  constructor(private httpClient: HttpClient) {
  }

  getWheatherInfo(zipcode, country = 'us') {
    // tslint:disable-next-line:max-line-length
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${country}&units=imperial&APPID=5a4b2d457ecbef9eb2a71e480b947604`;
    return this.httpClient.get<WheatherReport>(url);
  }

  getWeatherIcon(id) {
    if (id >= 200 && id <= 232) {
      return WheatherServiceService.ICON_URL + 'art_storm.png';
    } else if (id >= 501 && id <= 511) {
      return WheatherServiceService.ICON_URL + 'art_rain.png';
    } else if (id === 500 || (id >= 520 && id <= 531)) {
      return WheatherServiceService.ICON_URL + 'art_light_rain.png';
    } else if (id >= 600 && id <= 622) {
      return WheatherServiceService.ICON_URL + 'art_snow.png';
    } else if (id >= 801 && id <= 804) {
      return WheatherServiceService.ICON_URL + 'art_clouds.png';
    } else if (id === 741 || id === 761) {
      return WheatherServiceService.ICON_URL + 'art_fog.png';
    } else {
      return WheatherServiceService.ICON_URL + 'art_clear.png';
    }
  }
}
