/**
 * Created by kyle on 2/17/2017.
 */

import {Component, Input} from "@angular/core";
import {Champion} from "../../../../types/champion/champion";
import {Spell} from "../../../../types/champion/spell";

@Component({
  moduleId: module.id,
  selector: 'champion-spells',
  templateUrl: './champion-spells.component.html'
})

export class ChampionSpellsComponent{
  @Input() spells: Spell[];

  private imageUrl = 'http://ddragon.leagueoflegends.com/cdn/7.3.3/img/spell/';

  getSpellImage(spellName: string): string{
    return this.imageUrl + spellName + ".png";
  }
}
