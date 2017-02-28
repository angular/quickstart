/**
 * Created by kyle on 2/16/2017.
 */
import {Component, OnInit} from "@angular/core";
import {ChampionGroup} from "../types/champion/champion.group";
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

  constructor(private championService: ChampionService){}

  getChampions(): void {
    this.championService.getAllChampions()
      .then(champions => {
        this.champions = champions;
        console.log("Objects in ChampionsComponent: ");
        console.log(this.champions);
      });
  }

  getChampion(champion: Champion): void{
    this.championService.getChampion(champion)
      .then(champion => {
        console.log("Obtained Champion data");
        console.log(champion);
        return this.selectedChampion = champion;
      });
  }

  ngOnInit(): void {
    this.getChampions();
  }
}
