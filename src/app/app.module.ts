import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {GoldPriceHttpClient} from "./services/gold-price-http-client.service";
import {GoldPriceCalculator} from "./services/gold-price-calculator.service";
import {GoldPriceService} from "./services/gold-price-service.service";

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
    HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ GoldPriceHttpClient, GoldPriceCalculator, GoldPriceService ]
})
export class AppModule { }
