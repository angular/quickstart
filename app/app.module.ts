import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import './rxjs-extensions';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }  from './heroes.component';
import { HeroSearchComponent }  from './hero-search.component';

import { HeroService } from './hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
   ],
   providers: [
     HeroService
   ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
