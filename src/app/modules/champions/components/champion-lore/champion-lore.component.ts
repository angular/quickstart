import {Component, Input} from "@angular/core";
import {Champion} from "../../../../types/champion/champion";
import {Logger} from "angular2-logger/core";
/**
 * Created by kyle on 2/18/2017.
 */
@Component({
  moduleId: module.id,
  selector: 'champion-lore',
  templateUrl: './champion-lore.component.html'
})

export class ChampionLoreComponent{
  @Input()
  champion: Champion;

  constructor(private logger: Logger){}

}
