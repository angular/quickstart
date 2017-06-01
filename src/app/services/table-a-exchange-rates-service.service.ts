import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GoldPriceHttpClient} from './gold-price-http-client.service';
import {GoldPriceCalculator} from './gold-price-calculator.service';
import {Rate} from '../model/rate';
import {TableAHttpClientService} from "./table-a-http-client.service";
@Injectable()
export class AverageExchangeRatesService {

  constructor(private tableAHttpClientService: TableAHttpClientService) {
  }

 getCurrencyWithTheHighestCurrentRate(): Observable<Rate> {
   return this.tableAHttpClientService.getRateList().map(a => a[0] );
  }

}
