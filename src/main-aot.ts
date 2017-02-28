import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
