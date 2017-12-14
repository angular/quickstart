import { Component } from '@angular/core';
//import {HeroesComponent} from'./components/heroes/heroes.component';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <app-message></app-message>
  <app-heroes><app-heroes>
  `,
})
export class AppComponent  { 
  name = 'Satyam';
  title='Tour of Heroes';
}
