// by importing, we don't have to add a script tag into HTML.
// Angular comes with module loading that handles this.
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

// Component.
// module.id property is contextual: Angular figures out, using the module loader, where we are located.
  // therefore, we don't have to specify the file path. The file path string is prepended to the component properties below.
// Selector is an element that must be inserted into the app.component.ts using back-ticks.
  // this is how we inject this component into the existing HTML.
// we will name an HTML file in templateUrl, which we will have to create.
// Tell Angular's injector that the service exists via the Provider's list.
@Component({
  moduleId: module.id,
  selector: 'toh-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  providers: [HeroService]
})

export class HeroesComponent implements OnInit {
  // get a new heroes class from a new model
  heroes: Hero[];
  selectedHero: Hero;
  // Constructor injection: inject into this constructor the HeroService
    // to create a useable, private property
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // get a synchronous set of values from the service because we set the provider.
    // Angular can access it now.
    this.heroes = this.heroService.getHeroes();

    // create heroes property
    // this.heroes = [
    //   { 'id': 11, 'name': 'Chewbacca' },
    //   { 'id': 12, 'name': 'Rey' },
    //   { 'id': 13, 'name': 'Finn (FN2187)' },
    //   { 'id': 14, 'name': 'Han Solo' },
    //   { 'id': 15, 'name': 'Leia Organa' }
    // ];
  }
  // when selected the hero highlights. see html as the css is set up for it.
  onSelect(hero: Hero) {
    // assign this parameter to the selected hero variable, which has a class of Hero.
    this.selectedHero = hero;
  }
}
