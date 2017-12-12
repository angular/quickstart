import {Component,OnInit} from '@angular/core';
import {Hero} from './heroes.interface';
import {HEROES,changeComment} from './mock-data/mock-heroes';
@Component({
    selector:'app-heroes',
    templateUrl:'./heroes.component.html',
    styleUrls:['./heroes.component1.css']
})
export class HeroesComponent implements OnInit{
    selectedHero:Hero;
    comment:string;
  heroes:Hero[]
    constructor(){
this.heroes=HEROES;
    }
onSelect(hero:Hero):void{
this.selectedHero=hero;
} 
postComment(){
if(this.selectedHero&&this.comment.length!=0){
this.selectedHero.comments.push(this.comment);
changeComment(this.selectedHero.id,this.comment);
this.comment="";
}
}
    ngOnInit(){
        
    }
}
