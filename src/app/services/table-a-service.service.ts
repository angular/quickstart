import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {Rate} from '../model/rate';
import {TableAHttpClientService} from "./table-a-http-client.service";
import {TableACalculatorService} from "./table-a-calculator.service";
@Injectable()
export class TableAService {

  constructor(private tableAHttpClientService: TableAHttpClientService, private tableACalculatorService: TableACalculatorService) {
  }

 getCurrencyWithTheHighestCurrentRate(): Observable<Rate> {
   return this.tableAHttpClientService.getRateList().map((rates) => this.tableACalculatorService.getMaxRate(rates));
  }

  getCurrencyList(): Observable<Rate[]> {
    return this.tableAHttpClientService.getRateList();
  }

}
