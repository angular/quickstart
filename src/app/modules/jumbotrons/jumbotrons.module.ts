/**
 * Created by kyle on 2/15/2017.
 */
// angular modules
import { NgModule } from '@angular/core';

// services
import { HomeJumbo } from './components/home-jumbo.component';

@NgModule({
  declarations: [HomeJumbo],
  exports: [HomeJumbo]
})

export class Jumbotron { }
