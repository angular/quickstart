import { Injectable } from '@angular/core';
import { downgradeInjectable } from '@angular/upgrade/static';

declare var angular: angular.IAngularStatic;

@Injectable()
export class Foo {

}

angular.module('meh', []).factory('foo', downgradeInjectable(Foo));