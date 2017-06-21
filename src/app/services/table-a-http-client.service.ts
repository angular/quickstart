import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Rate} from "../model/rate";


@Injectable()
export class TableAHttpClientService {

  TABLE_A_URL: String = 'http://api.nbp.pl/api/exchangerates/tables/a';

  constructor(private http: Http) {
  }
  getRateList(): Observable<Rate[]> {
    return this.http.get(this.TABLE_A_URL + '?format=json').map(res => (res.json()[0].rates as Rate[]))
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

