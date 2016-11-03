import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroDetailComponent } from './hero-detail.component';


import { HeroService } from './hero.service'

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  getHeroes(): void {
    this.heroService.getHeroesSlowly()
      .then(heroes =>
        this.heroes = heroes
      );
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate([
      './detail',
    this.selectedHero.id
  ]);
  }

  add(name: string): void {
    this.heroService.create(name)
    .then(hero => {
      this.heroes.push(hero);
      this.selectedHero = null;
    });
  }

  delete(hero: Hero): void {
    this.heroService
    .delete(hero.id)
    .then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if(this.selectedHero === hero){ this.selectedHero = null; }
    });
  }
}

export class Hero {
  id: number;
  name: string;
}
