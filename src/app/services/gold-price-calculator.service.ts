import {Injectable} from '@angular/core';
import {GoldPrice} from '../model/gold-price';
@Injectable()
export class GoldPriceCalculator {

  extractPrice(goldPrices: GoldPrice[]): Number {
    return goldPrices[0].cena;
  }

}
