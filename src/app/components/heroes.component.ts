import {Component,OnInit} from '@angular/core';
import {Hero} from './../interfaces/heroes.interface';
import {HEROES} from './../mock-data/mock-heroes';
@Component({
    selector:'app-heroes',
    template:
    `
    <h2>{{hero.name }} Details</h2>
    <div><span>id : </span>{{hero.id}}</div>
    <div><span>name: </span>{{hero.name}}</div>
    <div class="hero-name"><label>Name: <input [(ngModel)]="hero.name" placeholder="Name"/>
    </label>
    </div>

    <h2>My Heroes</h2>
    <ul class="heroes">
    <li *ngFor="let hero of heroes">
    <span class="badge">{{hero.id}} </span>{{hero.name}}
    </li></ul>
    `,
    styleUrls:['./../styles/heroes.component.css']
})
export class HeroesComponent implements OnInit{
  hero:Hero
  heroes:Hero[]
    constructor(){
this.hero={
    id:1,
    name:'windstorm'
}
this.heroes=HEROES;
    }
    ngOnInit(){

    }
}
