import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {GoldPriceHttpClient} from "./services/gold-price-http-client.service";
import {GoldPriceCalculator} from "./services/gold-price-calculator.service";
import {GoldPriceService} from "./services/gold-price-service.service";
import {GoldPriceComponent} from "./goldprice.component";
import {DateTransformatorService} from "./services/date-transformator.service";

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule],
  declarations: [ AppComponent, GoldPriceComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ GoldPriceHttpClient, GoldPriceCalculator, GoldPriceService, DateTransformatorService ]
})
export class AppModule { }
