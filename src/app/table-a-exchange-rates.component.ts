import { Component, OnInit } from '@angular/core';
import {GoldPriceService} from "./services/gold-price-service.service";
import {DateTransformatorService} from "./services/date-transformator.service";
import {AverageExchangeRatesService} from "./services/table-a-exchange-rates-service.service";
import {Rate} from "./model/rate";

@Component({
  selector: 'table-a-exchange-rates',
  templateUrl: './table-a-exchange-rates.component.html',
  styleUrls: [ './table-a-exchange-rates.component.css' ]
})
export class TableAExchangeRatesComponent implements OnInit {

  theBiggestCurrency: Rate =new Rate('a', 'a', 0);
  goldPriceByDay: Number;
  date: String ;

  constructor(private averageExchangeRatesService: AverageExchangeRatesService) { }

  ngOnInit(): void {
    this.getTodayGoldPrice();
    this.getGoldPriceByDate(this.date);
  }

  getGoldPriceByDate(date: String) {
   // this.goldPriceService.getGoldPriceByDate(date).subscribe(goldPrice =>
   //   this.updatePriceByDate(goldPrice));
  }

  getTodayGoldPrice() {
    this.averageExchangeRatesService.getCurrencyWithTheHighestCurrentRate().subscribe(goldPrice =>
          this.updateTodayPrice(goldPrice));
  //  this.goldPriceService.getTodayGoldPrice()
 //     .subscribe(goldPrice =>
  //      this.updateTodayPrice(goldPrice));
  }

  updateTodayPrice(goldPrice: Rate): void {
    this.theBiggestCurrency = goldPrice;
  }

  updatePriceByDate(goldPrice: Number): void {
    this.goldPriceByDay = goldPrice;
  }

  valueChangeDate(): void {

    this.getGoldPriceByDate(this.date);
  }
}
