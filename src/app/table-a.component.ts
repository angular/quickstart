import { Component, OnInit } from '@angular/core';
import {TableAService} from "./services/table-a-service.service";
import {Rate} from "./model/rate";

@Component({
  selector: 'table-a-exchange-rates',
  templateUrl: './table-a.component.html',
  styleUrls: [ './table-a.component.css' ]
})
export class TableAComponent implements OnInit {

  theBiggestCurrency: Rate = new Rate('a', 'a', 0);

  constructor(private averageExchangeRatesService: TableAService) { }

  ngOnInit(): void {
    this.getBiggestCurrency();
  }

  getBiggestCurrency() {
    this.averageExchangeRatesService.getCurrencyWithTheHighestCurrentRate().subscribe(goldPrice =>
          this.updateBiggestCurrency(goldPrice));
  }

  updateBiggestCurrency(goldPrice: Rate): void {
    this.theBiggestCurrency = goldPrice;
  }
}
