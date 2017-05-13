import {Injectable, ReflectiveInjector} from '@angular/core';
import {async, fakeAsync, tick} from '@angular/core/testing';
import {BaseRequestOptions, ConnectionBackend, Http, RequestOptions} from '@angular/http';
import {Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import 'rxjs/add/operator/toPromise';

const HERO_ONE = 'HeroNrOne';
const HERO_TWO = 'WillBeAlwaysTheSecond';
@Injectable()
class HeroService {
  constructor(private http: Http) {}
  getHeroes(): Promise<String[]> {
    return this.http.get('myservices.de/api/heroes')
      .toPromise()
      .then(response => response.json().data)
      .catch(e => this.handleError(e));
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
describe('MockBackend HeroService Example', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http,
      HeroService,
    ]);
    this.heroService = this.injector.get(HeroService);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
  });
  it('getHeroes() should query current service url', () => {
    this.heroService.getHeroes();

    expect(this.lastConnection).toBeDefined('no http service connection at all?');
    expect(this.lastConnection.request.url).toEqual('myservices.de/api/heroes', 'url invalid');
  });
  it('getHeroes() should return some heroes', fakeAsync(() => {
    let result: String[];

    this.heroService.getHeroes().then((heroes: String[]) => result = heroes);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({data: [HERO_ONE, HERO_TWO]}),
    })));


    tick();
    expect(result.length).toEqual(2, 'should contain given amount of heroes');
    expect(result[0]).toEqual(HERO_ONE, ' HERO_ONE should be the first hero');
    expect(result[1]).toEqual(HERO_TWO, ' HERO_TWO should be the second hero');
  }));
  it('getHeroes() while server is down', fakeAsync(() => {
    let result: String[];
    let catchedError: any;
    this.heroService.getHeroes()
      .then((heroes: String[]) => result = heroes)
      .catch((error: any) => catchedError = error);
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      status: 404,
      statusText: 'URL not Found',
    })));
    tick();
    expect(result).toBeUndefined();
    expect(catchedError).toBeDefined();
  }));
});
