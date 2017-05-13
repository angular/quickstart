import {async, inject, TestBed} from '@angular/core/testing';
import {BaseRequestOptions, Http, HttpModule, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import 'rxjs/add/operator/toPromise';
import {GoldPriceHttpClient} from './gold-price-http-client.service';
import {GoldPrice} from '../model/gold-price';
import {GoldPriceService} from './gold-price-service.service';
import {GoldPriceCalculator} from './gold-price-calculator.service';

describe('Gold price service integration test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GoldPriceService,
        GoldPriceHttpClient,
        GoldPriceCalculator,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      imports: [
        HttpModule
      ]
    });
  });

  it('should return price as number', async(inject(
    [GoldPriceService, MockBackend], (service: GoldPriceService, mockBackend: MockBackend) => {
      /*given*/
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const goldPrice: GoldPrice[] = [new GoldPrice('2017-05-11', 2.30)];
        connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(goldPrice)})));
      });

      /*when*/
      const result = service.getTodayGoldPrice();

      /*then*/
      result.subscribe((res: Number) => expect(res).toEqual(2.30)
        , (error: any) => fail());
    })));

});

