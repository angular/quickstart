/**
 * Created by kyle on 2/16/2017.
 */
import {Component, OnInit} from "@angular/core";
import {ChampionGroup} from "../types/champion/champion.group";
import {Logger} from "angular2-logger/core";
import {Champion} from "../types/champion/champion";
import {ChampionService} from "../modules/champion-services/services/champion.service";


@Component({
  moduleId: module.id,
  selector: 'champions-section',
  templateUrl: './champions-section.component.html',
  styleUrls: ['champions-sections.component.css']
})
export class ChampionsSectionComponent implements OnInit{
  champions: ChampionGroup;
  selectedChampion: Champion;

  constructor(private championService: ChampionService, private logger: Logger){}

  getChampions(): void {
    this.championService.getAllChampions()
      .then(champions => {
        this.champions = champions;
        this.logger.debug("Objects in ChampionsComponent: ");
        this.logger.debug(this.champions);
      });
  }

  getChampion(champion: Champion): void{
    this.championService.getChampion(champion)
      .then(champion => {
        this.logger.debug("Obtained Champion data");
        this.logger.debug(champion);
        return this.selectedChampion = champion;
      })
  }

  ngOnInit(): void {
    this.getChampions();
  }
}
