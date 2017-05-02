/**
 * Created by simonletort on 2/22/17.
 */
import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/artworks" routerLinkActive="active">Artworks</a>
    </nav>
    <router-outlet></router-outlet>
    `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = "Artware";
}
