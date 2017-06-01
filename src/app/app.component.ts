import {Component, OnInit} from '@angular/core';

import {GoldPriceService} from "./services/gold-price-service.service";

@Component({
  selector: 'my-app',
  template: `<h1>Cena złota na dziś {{goldPrice}}</h1>    
  <nav>
    <a routerLink="/goldprice" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `, styleUrls: ['./app.component.css']
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
