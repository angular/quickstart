
import { Component, Input } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  moduleId: module.id,
  selector: 'toh-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroComponent  {
  @Input() hero: Hero;
}
