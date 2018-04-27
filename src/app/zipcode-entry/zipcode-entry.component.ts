import { Component, OnInit, Input, Output } from '@angular/core';
import { WheatherServiceService } from '../wheather-service.service';
import { WheatherReport } from '../wheather-service.service';
// tslint:disable-next-line:import-blacklist
import { Observable, Subject } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.css']
})
export class ZipcodeEntryComponent implements OnInit {

  @Input()
  zipcode: string;

  constructor(private wheatherService: WheatherServiceService, private commonService: CommonService) { }

  ngOnInit() {
  }

  onAddLocationClick() {
    this.wheatherService.getWheatherInfo(this.zipcode).subscribe(data => this.commonService.addWheatherInfo(data) );
  }
}
