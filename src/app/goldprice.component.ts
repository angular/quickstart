import { Component, OnInit } from '@angular/core';
import {GoldPriceService} from "./services/gold-price-service.service";
import {DateTransformatorService} from "./services/date-transformator.service";

@Component({
  selector: 'goldprice',
  templateUrl: './goldprice.component.html',
  styleUrls: [ './goldprice.component.css' ]
})
export class GoldPriceComponent implements OnInit {

  goldPriceToday: Number;
  goldPriceByDay: Number;
  date: String ;

  constructor(private goldPriceService: GoldPriceService, private dateTransformatorService: DateTransformatorService) { }
  ngOnInit(): void {
    this.date = this.dateTransformatorService.toString(new Date());
    this.getTodayGoldPrice();
    this.getGoldPriceByDate(this.date);
  }

  getGoldPriceByDate(date: String) {
    this.goldPriceService.getGoldPriceByDate(date).subscribe(goldPrice =>
      this.updatePriceByDate(goldPrice));
  }

  getTodayGoldPrice() {
    this.goldPriceService.getTodayGoldPrice()
      .subscribe(goldPrice =>
        this.updateTodayPrice(goldPrice));
  }

  updateTodayPrice(goldPrice: Number): void {
    this.goldPriceToday = goldPrice;
  }

  updatePriceByDate(goldPrice: Number): void {
    this.goldPriceByDay = goldPrice;
  }

  valueChangeDate(): void {

    this.getGoldPriceByDate(this.date);
  }
}
