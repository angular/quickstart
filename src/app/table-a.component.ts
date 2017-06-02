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
  rates: Rate[] = [];

  constructor(private tableAService: TableAService) { }

  ngOnInit(): void {
    this.getBiggestCurrency();
    this.getRateList();
  }

  getBiggestCurrency() {
    this.tableAService.getCurrencyWithTheHighestCurrentRate().subscribe(goldPrice =>
          this.updateBiggestCurrency(goldPrice));
  }

  getRateList() {
    this.tableAService.getCurrencyList().subscribe(rates =>
      this.updateRateList(rates));
  }

  updateBiggestCurrency(goldPrice: Rate): void {
    this.theBiggestCurrency = goldPrice;
  }

  updateRateList(rates: Rate[]): void {
    this.rates = rates;
  }
}
