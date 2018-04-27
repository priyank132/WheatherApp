import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WheatherReport } from '../wheather-service.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-wheather-info-by-zipcode',
  templateUrl: './wheather-info-by-zipcode.component.html',
  styleUrls: ['./wheather-info-by-zipcode.component.css']
})
export class WheatherInfoByZipcodeComponent implements OnInit {


  constructor(public commonService: CommonService ) {
  }

  ngOnInit() {
  }
}
