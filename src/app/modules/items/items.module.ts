/**
 * Created by kyle on 2/20/2017.
 */

import {NgModule} from "@angular/core";
import {ItemStatsComponent} from "./components/item-stats/item-stats.component";
import {BrowserModule} from "@angular/platform-browser";
import {Pipes} from "../pipes/pipes.module";
import {ItemImageComponent} from "./components/item-image/item-image.component";

@NgModule({
  declarations: [ItemStatsComponent, ItemImageComponent],
  imports:[Pipes, BrowserModule],
  exports:[ItemStatsComponent, ItemImageComponent]
})
export class ItemsModule{}
