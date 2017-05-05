import { LOCALE_ID, NgModule }  from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { ButtonsModule }        from '@progress/kendo-angular-buttons';

import { AppComponent }         from './app.component';

/* Loading CLDR data
 * http://www.telerik.com/kendo-angular-ui/components/internationalization/

import { load } from '@progress/kendo-angular-intl';

load(
  require("cldr-data/supplemental/likelySubtags.json"),
  require("cldr-data/supplemental/currencyData.json"),
  require("cldr-data/supplemental/weekData.json"),

  require("cldr-data/main/bg/numbers.json"),
  require("cldr-data/main/bg/currencies.json"),
  require("cldr-data/main/bg/dateFields.json"),
  require("cldr-data/main/bg/ca-gregorian.json"),
  require("cldr-data/main/bg/timeZoneNames.json")
);

*/

@NgModule({
  imports: [ BrowserModule, ButtonsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

