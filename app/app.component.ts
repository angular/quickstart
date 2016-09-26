import { Component } from '@angular/core';
// import the HeroesComponent so that template knows what toh-heroes is.
// import { HeroesComponent } from './heroes/heroes.component';

// another component:
// use back-ticks for template because it enables multi-line string capability.

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <toh-heroes></toh-heroes>
    `
    // directives: [HeroesComponent] has been deprecated.
    // See app.module.ts
})
export class AppComponent {
    title = "My website";
}
