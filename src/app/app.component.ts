import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: [
    // load the Kendo UI Default theme
    'node_modules/@progress/kendo-theme-default/dist/all.css'
  ],
  template: `
    <h1>Hello {{name}}!</h1>
    <button kendoButton (click)="onButtonClick()" [primary]="true">My Kendo UI Button</button> 
  `,
})
export class AppComponent  {
  name = 'Angular';

  onButtonClick() {
    this.name = 'Kendo UI';
  }
}
