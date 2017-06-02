import {async, inject, TestBed} from '@angular/core/testing';
import {BaseRequestOptions, Http, HttpModule, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import 'rxjs/add/operator/toPromise';
import {TableACalculatorService} from "./table-a-calculator.service";
import {TableAHttpClientService} from "./table-a-http-client.service";
import {TableAService} from "./table-a-service.service";
import {Rate} from "../model/rate";
import {Observable} from "rxjs/Observable";

describe('Table A service integration test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TableACalculatorService,
        TableAHttpClientService,
        TableAService,
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

  it('should return the currency with the biggest price', async(inject(
    [TableAService, MockBackend], (service: TableAService, mockBackend: MockBackend) => {
      /*given*/
      mockBackend.connections.subscribe((connection: MockConnection) => {
        const goldPrice: Object[] = [
          { table: 'B',
            no: '022/B/NBP/2017',
            effectiveDate: '2017-05-31',
            rates: [new Rate('A', 'AA', 2.30), new Rate('B', 'BB', 1.30), new Rate('CC', 'CC', 0.10)]
          }];
        connection.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(goldPrice)})));
      });

      /*when*/
      const result: Observable<Rate> = service.getCurrencyWithTheHighestCurrentRate();

      /*then*/
      result.subscribe((res) => expect(res.mid).toEqual(2.30)
        , (error: any) => fail());
    })));

});

