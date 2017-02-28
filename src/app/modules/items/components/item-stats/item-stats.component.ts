/**
 * Created by kyle on 2/20/2017.
 */

import {Component, Input, OnInit, OnChanges} from "@angular/core";
import {Stat} from "../../../../types/item/stat";
import {Logger} from "angular2-logger/core";
@Component({
  moduleId: module.id,
  selector: 'item-stats',
  templateUrl: './item-stats.component.html'
})
export class ItemStatsComponent implements OnInit, OnChanges{

  @Input()
  stats: Stat;
  keys: string[];

  constructor(){}

  getKeys(): void{
    this.keys = Object.keys(this.stats);
    console.log("Keys of Stats:");
    console.log(this.keys);
  }

  ngOnChanges(): void{
    this.getKeys();
  }

  ngOnInit(): void{
    this.getKeys();
  }
}
