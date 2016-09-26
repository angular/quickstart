/*
  A service is just a class. There is no Provider, Constant, value, Factory, Service.
*/

import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

// TypeScript sees the @Injectable() decorator and emits metadata about our service, metadata that Angular may need to inject other dependencies into this service.
@Injectable()

export class HeroService {
  // inject into constructor the http
  constructor(private http: Http) { }

  getHeroes() {
    // this will make an HTTP GET request, and map the response to whatever we want.
      // the map function comes out of rxjs extensions which is imported above.
    // this maps asynchronously. This means we must change the function in heroes.components.ts because it is set up synchronously.
    return this.http.get('app/heroes.json')
      .map(res: Response) => res.json());


    // instead of hard-coding this data, let's use HTTP.
      // in main.ts tell it that we want to use HTTP, using @angular/http.
    // return [
    //   { 'id': 11, 'name': 'Chewbacca' },
    //   { 'id': 12, 'name': 'Rey' },
    //   { 'id': 13, 'name': 'Finn (FN2187)' },
    //   { 'id': 14, 'name': 'Han Solo' },
    //   { 'id': 15, 'name': 'Leia Organa' }
    // ]
  }
}
