/**
 * Created by simonletort on 2/25/17.
 */

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { ArtworkSearchService } from './artwork-search.service';
import { Artwork } from './artwork';

@Component({
  moduleId: module.id,
  selector: 'artwork-search',
  templateUrl: './artwork-search.component.html',
  styleUrls: [ './artwork-search.component.css' ],
  providers: [ArtworkSearchService]
})

export class ArtworkSearchComponent implements OnInit {
  artworks: Observable<Artwork[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private artworkSearchService: ArtworkSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.artworks = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.artworkSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Artwork[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Artwork[]>([]);
      });
  }

  gotoDetail(artwork: Artwork): void {
    let link = ['/detail', artwork.id];
    this.router.navigate(link);
  }
}
