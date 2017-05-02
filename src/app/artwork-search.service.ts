/**
 * Created by simonletort on 2/25/17.
 */

import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Artwork }           from './artwork';

@Injectable()
export class ArtworkSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Artwork[]> {
    return this.http
      .get(`app/artworks/?name=${term}`)
      .map(response => response.json().data as Artwork[]);
  }
}
