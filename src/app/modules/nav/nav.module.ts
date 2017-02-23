/**
 * Created by kyle on 2/15/2017.
 */

// modules
import { NgModule } from '@angular/core'

// providers
import { DEBUG_LOGGER_PROVIDERS } from 'angular2-logger/core';

//services


@NgModule({
  declarations: [
  ],
  providers: [
    DEBUG_LOGGER_PROVIDERS
  ],
  // make component public
  exports: [],
})

export class NavModule {}
