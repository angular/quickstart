import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { ArtworksComponent }  from './artworks.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ArtworkService } from './artwork.service';
import { DashboardComponent } from "./dashboard.component";

import { AppRoutingModule }     from './app-routing.module';
import { ArtworkSearchComponent } from "./artwork-search.component";

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ AppComponent, ArtworksComponent, HeroDetailComponent, DashboardComponent, ArtworkSearchComponent],
  providers:    [ ArtworkService],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
