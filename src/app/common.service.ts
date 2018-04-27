import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WheatherReport, WheatherServiceService } from './wheather-service.service';

@Injectable()
export class CommonService {

  whetherDetailByZipCode: WheatherReport[] = [];

  constructor(private service: WheatherServiceService) { }

  addWheatherInfo(wheatherInfo: WheatherReport) {
    this.whetherDetailByZipCode.push(wheatherInfo);
  }

  getWheatherInfo(): WheatherReport[] {
    return this.whetherDetailByZipCode;
  }

  getWeatherIcon(id) {
    this.service.getWeatherIcon(id);
  }
}
