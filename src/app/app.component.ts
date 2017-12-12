import { Component } from '@angular/core';
import {HeroesComponent} from'./components/heroes.component';
@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
  <app-heroes><app-heroes>`,
})
export class AppComponent  { 
  name = 'Satyam';
  title='Tour of Heroes';
}
