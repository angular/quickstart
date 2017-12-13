import {Injectable} from '@angular/core';
import {Hero} from './heroes.interface';
import {HEROES} from './mock-data/mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';
import {MessageService} from './../messages/message.service';
@Injectable()
export class HeroService{
    constructor(private messageService:MessageService){

    }
    getHero():Observable<Hero[]>{
        this.messageService.add("Hero Service fethed heroes...");
        return of(HEROES);
    }
}