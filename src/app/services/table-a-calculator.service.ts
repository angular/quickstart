import {Injectable} from '@angular/core';
import {Rate} from "../model/rate";
@Injectable()
export class TableACalculatorService {

  getMaxRate(rates: Rate[]): Rate {
    return rates.reduce((p, n) => p.mid > n.mid ? p : n ) ;
  }

}
