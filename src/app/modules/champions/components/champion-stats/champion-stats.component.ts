import {Component, Input, OnInit} from "@angular/core";
import {Stat} from "../../../../types/champion/stat";
/**
 * Created by kyle on 2/18/2017.
 */

@Component({
  moduleId: module.id,
  selector: 'champion-stats',
  templateUrl: './champion-stats.component.html'
})
export class ChampionStatsComponent implements OnInit {
  @Input()
  stats: Stat;
  keys: string[];

  constructor(){}

  getKeys(): void{
    this.keys = Object.keys(this.stats);
    console.log("Keys of Stats:");
    console.log(this.keys);
  }

  ngOnInit(): void{
    console.log("test");
    this.getKeys();
  }

}
