import {inject, TestBed} from '@angular/core/testing';
import 'rxjs/add/operator/toPromise';
import {TableACalculatorService} from "./table-a-calculator.service";
import {Rate} from "../model/rate";

describe('Tacle A price calulator spec', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableACalculatorService]
    });
  });

  it('should extract the biggest rate', inject([TableACalculatorService], (testObj: TableACalculatorService) => {

    /*given*/
    let rates: Rate[] = [new Rate('A' , 'AA', 1), new Rate('B' , 'B', 2), new Rate('C' , 'CC', 3)]

    /*when*/
    const result: Rate = testObj.getMaxRate(rates);

    /*then*/
    expect(result.mid).toEqual(3);
    expect(result.currency).toEqual('C');
    expect(result.code).toEqual('CC');
  }));
});

