/**
 * Created by kyle on 2/16/2017.
 */
import { BrowserModule } from '@angular/platform-browser';

import{NgModule} from "@angular/core";
import {Pipes} from '../pipes/pipes.module';
import {ChampionSpellsComponent} from './components/champion-spells/champion-spells.component';
import {ChampionSkinsComponent} from "./components/champion-skins/champion-skins.component";
import {ChampionLoreComponent} from "./components/champion-lore/champion-lore.component";
import {ChampionStatsComponent} from "./components/champion-stats/champion-stats.component";

@NgModule({
  declarations: [ChampionSpellsComponent, ChampionSkinsComponent, ChampionLoreComponent, ChampionStatsComponent],
  imports:[Pipes, BrowserModule],
  exports: [ChampionSpellsComponent, ChampionSkinsComponent, ChampionLoreComponent, ChampionStatsComponent]
})

export class Champions{}
