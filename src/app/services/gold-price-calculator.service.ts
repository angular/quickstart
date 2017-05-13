
import {Injectable} from "@angular/core";
import {GoldPrice} from "../model/gold-price";
@Injectable()
export class GoldPriceCalculator {

  extreactPrice(goldPrices: GoldPrice[]): Number {
    return goldPrices[0].cena;
  }

}
