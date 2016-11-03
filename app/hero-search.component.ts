import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'hero-search.component.html',
  styleUrls: ['hero-search.component.css'],
  providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  // Subjectはobservableインベントストリームを生成する。
  // seraechTermsはObservableな文字列を生成する。

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router) { }

    search(term: string): void {
      this.searchTerms.next(term);
      // これで検索？となるかもしれない。
      // ngOnInitで、heroesはsearchTermsの影響を受けてその中身が変わる。
      // つまり、searchTermsの中身を変えることがここではそのまま検索になっている。
      // 検索ボックスに文字が入力されるたびに、HTTPリクエストを送っていたのではサーバにやさしくない。
    }

    ngOnInit(): void {
      this.heroes = this.searchTerms
      .debounceTime(300)            // 300ミリ秒よりも頻繁にHTTPリクエストを作ることはしない
      .distinctUntilChanged()       // 次の検索文字列が同じだった場合、無視する
      .switchMap(term => term       // 毎度新しいobservableに切り替える
        ? this.heroSearchService.search(term)   // HTTP検索のobservableを返す
        : Observable.of<Hero[]>([])             // 検索文字列がない場合、さもなくば空のobservableを返す
      )
      .catch(error => {
        console.log(error);
        return Observable.of<Hero[]>([]);
      });
    };

    gotoDetail(hero: Hero): void {
      let link = ['/detail', hero.id];
      this.router.navigate(link);
    }
}
