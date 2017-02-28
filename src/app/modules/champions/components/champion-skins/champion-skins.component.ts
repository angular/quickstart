/**
 * Created by kyle on 2/17/2017.
 */

import {Component, Input, OnInit, OnChanges} from "@angular/core";
import {Champion} from "../../../../types/champion/champion";
import {Skin} from "../../../../types/champion/skin";
import {Logger} from "angular2-logger/core";

@Component({
  moduleId: module.id,
  selector: 'champion-skins',
  templateUrl: './champion-skins.component.html'
})

export class ChampionSkinsComponent implements OnInit, OnChanges{

  @Input()
  champion: Champion;

  private skins: Skin[];
  private selectedSkin: number;
  private splashUrl = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"

  constructor(private logger: Logger){}

  getChampionSkinImage(): string{
    return this.splashUrl + this.champion.key+ "_" + this.selectedSkin + ".jpg";
  }

  selectSkin(skin: Skin): void{
    this.selectedSkin = skin.num;
  }

  ngOnChanges(): void{
    this.selectedSkin = 0;
    this.skins = this.champion.skins;
  }

  ngOnInit(): void{
    this.selectedSkin = 0;
    this.skins = this.champion.skins;
  }

}
