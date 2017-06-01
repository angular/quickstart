import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {GoldPrice} from '../model/gold-price';
import {DatePipe} from "@angular/common";
import {DateTransformatorService} from "./date-transformator.service";


@Injectable()
export class GoldPriceHttpClient {

  GOLD_PRICE_URL: String = 'http://api.nbp.pl/api/cenyzlota';

  constructor(private http: Http, private dateTransformatorService: DateTransformatorService) {
  }
  getGoldPrice(): Observable<GoldPrice[]> {
    return this.http.get(this.GOLD_PRICE_URL + '?format=json').map(res => (res.json() as GoldPrice[]))
      .catch(this.handleError);
  }

  getGoldPriceByDate(date: String): Observable<GoldPrice[]> {
    return this.http.get(this.GOLD_PRICE_URL + '/' + date + '?format=json').map(res => (res.json() as GoldPrice[]))
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}

