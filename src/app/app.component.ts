import {Component, OnInit} from '@angular/core';

import {GoldPrice} from "./model/gold-price";
import {GoldPriceService} from "./services/gold-price-service.service";

@Component({
  selector: 'my-app',
  template: `<h1>Cena złota na dziś {{goldPrice}}</h1>`,
})
export class AppComponent implements OnInit {
  goldPrice: Number;

  constructor(private goldPriceService: GoldPriceService) { }
  ngOnInit(): void {
    this.goldPriceService.getTodayGoldPrice()
      .subscribe(goldPrice =>
        this.updateView(goldPrice));
  }

  updateView(goldPrice: Number): void {
    this.goldPrice = goldPrice;
  }
}
