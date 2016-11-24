import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

@Injectable()
export class Foo {

}

// Run `npm test` you can see 3 success, then uncomment this line, boom, fail.
// It doesn't matter if Foo does nothing in this case.
// angular.module('meh').factory('foo', downgradeInjectable(Foo));