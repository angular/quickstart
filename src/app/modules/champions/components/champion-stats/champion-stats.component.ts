import {Component, Input, OnInit} from "@angular/core";
import {Logger} from "angular2-logger/core";
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

  constructor(private logger: Logger){}

  getKeys(): void{
    this.keys = Object.keys(this.stats);
    this.logger.debug("Keys of Stats:");
    this.logger.debug(this.keys);
  }

  ngOnInit(): void{
    this.logger.debug("test");
    this.getKeys();
  }

}
