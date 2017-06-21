import {async, inject, TestBed} from '@angular/core/testing';
import {BaseRequestOptions, Connection, Http, HttpModule, RequestMethod, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import 'rxjs/add/operator/toPromise';
import {GoldPriceHttpClient} from './gold-price-http-client.service';
import {GoldPrice} from '../model/gold-price';
import {DateTransformatorService} from "./date-transformator.service";

describe('Gold price http client spec', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GoldPriceHttpClient,
        DateTransformatorService,
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
    [GoldPriceHttpClient, MockBackend], (testObj: GoldPriceHttpClient, mockBackend: MockBackend) => {
      /*given*/
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const goldPrice: GoldPrice[] = [new GoldPrice('2017-05-11', 1.30)];
        connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(goldPrice)})));
      });

      /*when*/
      const result = testObj.getGoldPrice();

      /*then*/
      result.subscribe((res: GoldPrice[]) => {
          expect(res.length).toEqual(1);
          expect(res[0].cena).toEqual(1.30);
          expect(res[0].data).toEqual('2017-05-11');
        }
        , (error: any) => fail());
    })));

  it('url should and request getGoldPrice method should be correct', async(inject(
    [GoldPriceHttpClient, MockBackend], (testObj: GoldPriceHttpClient, mockBackend: MockBackend) => {
      /*given*/
      let lastConnection: Connection;
      mockBackend.connections.subscribe((connection: any) => lastConnection = connection);

      /*when*/
      testObj.getGoldPrice();

      /*then*/
      expect(lastConnection).toBeDefined();
      expect(lastConnection.request.url).toEqual('http://api.nbp.pl/api/cenyzlota?format=json');
      expect(lastConnection.request.method).toEqual(RequestMethod.Get);
    })));

  it('url should and request for getGoldPriceByDate method should be correct', async(inject(
    [GoldPriceHttpClient, MockBackend], (testObj: GoldPriceHttpClient, mockBackend: MockBackend) => {
      /*given*/
      let lastConnection: Connection;
      mockBackend.connections.subscribe((connection: any) => lastConnection = connection);

      /*when*/
      testObj.getGoldPriceByDate('2014-03-04');

      /*then*/
      expect(lastConnection).toBeDefined();
      expect(lastConnection.request.url).toEqual('http://api.nbp.pl/api/cenyzlota/2014-03-04?format=json');
      expect(lastConnection.request.method).toEqual(RequestMethod.Get);
    })));
});
