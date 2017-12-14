import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent }  from './app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {MessageComponent} from './components/messages/messages.component'
import {HeroService} from './components/heroes/hero.service';
import {MessageService} from './components/messages/message.service';
@NgModule({
  imports:      [ BrowserModule,FormsModule,NgbModule.forRoot()],
  declarations: [ AppComponent,HeroesComponent,MessageComponent],
  bootstrap:    [ AppComponent ],
  providers:[HeroService,MessageService]
})
export class AppModule { }
