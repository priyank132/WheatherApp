import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ZipcodeEntryComponent } from './zipcode-entry/zipcode-entry.component';
import { WheatherServiceService } from './wheather-service.service';
import { WheatherInfoByZipcodeComponent } from './wheather-info-by-zipcode/wheather-info-by-zipcode.component';
import { CommonService } from './common.service';


@NgModule({
  declarations: [
    AppComponent,
    ZipcodeEntryComponent,
    WheatherInfoByZipcodeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WheatherServiceService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
