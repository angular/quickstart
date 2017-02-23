// angular modules
import {NgModule} from '@angular/core'
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// app modules -- created
import { Jumbotron } from './modules/jumbotrons/jumbotrons.module';
import {ChampionServiceModule} from "./modules/champion-services/champion-services.module";
import {ItemServiceModule} from "./modules/item-services/item-services.module";
import {Champions} from "./modules/champions/champions.module";
import {Pipes} from './modules/pipes/pipes.module'

// providers
import {Logger} from 'angular2-logger/core';
import {Properties} from "./properties";

// components
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import {ChampionsSectionComponent} from "./champions-section/champions-section.component";
import {HomeSectionComponent} from "./home-section/home-section.component";
import {ItemsSectionComponent} from "./items-section/items-section.component";
import {ItemsModule} from "./modules/items/items.module";

@NgModule({
  declarations: [
    AppComponent,
    ChampionsSectionComponent,
    HomeSectionComponent,
    ItemsSectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    Jumbotron,
    ChampionServiceModule,
    ItemServiceModule,
    Champions,
    ItemsModule,
    Pipes
  ],
  providers: [
    Logger, Properties
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
