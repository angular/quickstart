import {inject, TestBed} from '@angular/core/testing';
import 'rxjs/add/operator/toPromise';
import {GoldPrice} from '../model/gold-price';
import {GoldPriceCalculator} from './gold-price-calculator.service';

describe('Gold price calulator spec', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoldPriceCalculator]
    });
  });

  it('should extract numer from array of GoldPrice', inject([GoldPriceCalculator], (testObj: GoldPriceCalculator) => {

    /*given*/
    let goldPrices: GoldPrice[] = [new GoldPrice('01', 1)]

    /*when*/
    const result: Number = testObj.extractPrice(goldPrices);

    /*then*/
    expect(result).toEqual(1);
  }));
});

