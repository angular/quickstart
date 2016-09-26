// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app.module';
//
// platformBrowserDynamic().bootstrapModule(AppModule);
//
//
import { bootstrap } from '@angular/platform-browser-dynamic';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// used in the service.
import { HTTP_PROVIDERS } from '@angular/http';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

// bootstrap(AppComponent, [ HTTP_PROVIDERS ]);
platformBrowserDynamic().bootstrapModule(AppComponent, [HTTP_PROVIDERS]);
