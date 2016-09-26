// by importing, we don't have to add a script tag into HTML.
// Angular comes with module loading that handles this.
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { HeroComponent } from './hero.component'

// Component.
// module.id property is contextual: Angular figures out, using the module loader, where we are located.
  // therefore, we don't have to specify the file path. The file path string is prepended to the component properties below.
// Selector is an element that must be inserted into the app.component.ts using back-ticks.
  // this is how we inject this component into the existing HTML.
// we will name an HTML file in templateUrl, which we will have to create.
@Component({
  moduleId: module.id,
  selector: 'toh-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // get a new heroes class from a new model
  heroes: Hero[];
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
    // create heroes property
    this.heroes = [
      { 'id': 11, 'name': 'Chewbacca' },
      { 'id': 12, 'name': 'Rey' },
      { 'id': 13, 'name': 'Finn (FN2187)' },
      { 'id': 14, 'name': 'Han Solo' },
      { 'id': 15, 'name': 'Leia Organa' }
    ];
  }
  // when selected the hero highlights. see html as the css is set up for it.
  onSelect(hero: Hero) {
    // assign this parameter to the selected hero variable, which has a class of Hero.
    this.selectedHero = hero;
  }
}
