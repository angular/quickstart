import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {GoldPriceHttpClient} from "./gold-price-http-client.service";
import {GoldPriceCalculator} from "./gold-price-calculator.service";
@Injectable()
export class GoldPriceService {

  constructor(private goldPriceHttpClinet: GoldPriceHttpClient, private goldPriceCalculator: GoldPriceCalculator) { }

  getTodayGoldPrice(): Observable<Number> {
    return this.goldPriceHttpClinet.getGoldPrice()
      .map((goldPrices) => this.goldPriceCalculator.extreactPrice(goldPrices));
  }

}
