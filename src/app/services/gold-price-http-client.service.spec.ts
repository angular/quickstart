import {async, inject, TestBed} from '@angular/core/testing';
import {BaseRequestOptions, Connection, Http, HttpModule} from '@angular/http';
import {Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import 'rxjs/add/operator/toPromise';
import {GoldPriceHttpClient} from "./gold-price-http-client.service";
import {GoldPrice} from "../model/gold-price";

describe('MockBackend Example', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GoldPriceHttpClient,

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

  it('should return price of gold with date', async(inject(
    [GoldPriceHttpClient, MockBackend], (service: GoldPriceHttpClient, mockBackend: MockBackend) => {

      mockBackend.connections.subscribe((conn: MockConnection)  => {
        const goldPrice: GoldPrice[] = [{
          data: '2017-05-11',
          cena: 1.30
        }];
        conn.mockRespond(new Response(new ResponseOptions({ body: JSON.stringify(goldPrice) })));
      });

      const result = service.getGoldPrice();



      result.subscribe((res: GoldPrice[])  => {
        expect(res.length).toEqual(1);
        expect(res[0].cena).toEqual(1.30);
        expect(res[0].data).toEqual('2017-05-11');
      });
    })));
});
