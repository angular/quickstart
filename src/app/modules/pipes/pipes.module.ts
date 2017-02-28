/**
 * Created by kyle on 2/16/2017.
 */

import {NgModule} from "@angular/core";
import {ObjectValuesPipe} from "./object-iteration/object-values.pipe";

@NgModule({
  declarations: [ObjectValuesPipe],
  exports: [ObjectValuesPipe]
})

export class Pipes{}

