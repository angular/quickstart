/**
 * Created by kyle on 2/15/2017.
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home-jumbo',
  templateUrl: './home-jumbo.component.html'
})

export class HomeJumbo {
  appName = 'Lol Wiki';
  summary = 'An app that provides information about League of Legends from the Riot API';
}
