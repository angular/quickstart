import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GoldPriceHttpClient} from './gold-price-http-client.service';
import {GoldPriceCalculator} from './gold-price-calculator.service';
import {Rate} from '../model/rate';
@Injectable()
export class AverageExchangeRatesService {

 getCurrencyWithTheHighestCurrentRate(): Observable<Rate> {
   /*zapytanie powinno opierać się o ednpoint http://api.nbp.pl/api/exchangerates/tables/a?format=json*/
    return null;
  }

}
