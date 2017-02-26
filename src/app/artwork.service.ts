/**
 * Created by simonletort on 2/21/17.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Artwork } from './artwork';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArtworkService {

  private artworksUrl = 'api/artworks';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getArtworks(): Promise<Artwork[]> {
    return this.http.get(this.artworksUrl)
      .toPromise()
      .then(response => response.json().data as Artwork[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Artwork> {
    const url = `${this.artworksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Artwork)
      .catch(this.handleError);
  }

  update(hero: Artwork): Promise<Artwork> {
    const url = `${this.artworksUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Artwork> {
    return this.http
      .post(this.artworksUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.artworksUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
