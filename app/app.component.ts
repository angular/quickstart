import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { DashBoardComponent } from './dashboard.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
      path:'dashboard',
      name:'DashBoard',
      component:DashBoardComponent,
      useAsDefault:true
  }
])
export class AppComponent {
  title = 'Tour of Heroes';
}