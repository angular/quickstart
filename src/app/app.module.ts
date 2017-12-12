import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import {HeroesComponent} from './components/heroes/heroes.component';

@NgModule({
  imports:      [ BrowserModule,FormsModule],
  declarations: [ AppComponent,HeroesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
