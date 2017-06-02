import {async, inject, TestBed} from '@angular/core/testing';
import {BaseRequestOptions, Connection, Http, HttpModule, RequestMethod, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import 'rxjs/add/operator/toPromise';
import {GoldPriceHttpClient} from './gold-price-http-client.service';
import {GoldPrice} from '../model/gold-price';
import {DateTransformatorService} from "./date-transformator.service";
import {TableAHttpClientService} from "./table-a-http-client.service";
import {Rate} from "../model/rate";

describe('Table A http client spec', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TableAHttpClientService,
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

  it('should return the biggest currency', async(inject(
    [TableAHttpClientService, MockBackend], (testObj: TableAHttpClientService, mockBackend: MockBackend) => {
      /*given*/
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const tableA: Object[] = [
          { table: 'B',
            no: '022/B/NBP/2017',
            effectiveDate: '2017-05-31',
            rates: [new Rate('A', 'AA', 2.30), new Rate('B', 'BB', 1.30), new Rate('CC', 'CC', 0.10)]
          }];
        connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(tableA)})));
      });

      /*when*/
      const result = testObj.getRateList();

      /*then*/
      result.subscribe((res: Rate[]) => {
        expect(res.length).toEqual(3);
        }
        , (error: any) => fail());
    })));

  it('url should and request getRateList method should be correct', async(inject(
    [TableAHttpClientService, MockBackend], (testObj: TableAHttpClientService, mockBackend: MockBackend) => {
      /*given*/
      let lastConnection: Connection;
      mockBackend.connections.subscribe((connection: any) => lastConnection = connection);

      /*when*/
      testObj.getRateList();

      /*then*/
      expect(lastConnection).toBeDefined();
      expect(lastConnection.request.url).toEqual('http://api.nbp.pl/api/exchangerates/tables/a?format=json');
      expect(lastConnection.request.method).toEqual(RequestMethod.Get);
    })));
});
