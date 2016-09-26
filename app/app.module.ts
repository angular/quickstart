/*
  Component directives were deprecated. See documentation.
  Instead of using Component directives, we import HeroesComponent here and then declare it.
  Then we import CUSTOM_ELEMENTS_SCHEMA to declare as schema.

  declarations : Array<Type<any>|any[]>
    Specifies a list of directives/pipes that belong to this module.
  schemas : Array<SchemaMetadata|any[]>
    Elements and properties that are not angular Components nor Directives have to be declared in the schema.
    Available schemas:
      NO_ERRORS_SCHEMA: any elements and properties are allowed,
      CUSTOM_ELEMENTS_SCHEMA: any custom elements (tag name has "-") with any properties are allowed.
*/


import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './heroes/hero.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, HeroesComponent, HeroComponent ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
