import {Component, OnInit} from '@angular/core';

import {GoldPriceService} from "./services/gold-price-service.service";

@Component({
  selector: 'my-app',
  template: `<h1>Price list NBP</h1>    
  <nav>
    <a routerLink="/home" routerLinkActive="active">Home</a>
    <a routerLink="/goldprice" routerLinkActive="active">Gold prices</a>
    <a routerLink="/tablea" routerLinkActive="active">Tabela A prices</a>
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
