import { Routes } from '@angular/router';
import {ChampionsSectionComponent} from './champions-section/champions-section.component';
import {HomeSectionComponent} from "./home-section/home-section.component";
import {ItemsSectionComponent} from "./items-section/items-section.component";

export const rootRouterConfig = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeSectionComponent},
  {path: 'champions', component: ChampionsSectionComponent},
  {path: 'items', component: ItemsSectionComponent}
];

