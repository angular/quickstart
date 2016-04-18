/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';

import {
  expect, it, iit, xit,
  describe, ddescribe, xdescribe,
  beforeEach, beforeEachProviders, withProviders,
  inject, injectAsync, TestComponentBuilder
} from 'angular2/testing';

import { By }             from 'angular2/platform/browser';
import { provide }        from 'angular2/core';
import { ViewMetadata }   from 'angular2/core';
import { PromiseWrapper } from 'angular2/src/facade/promise';

interface Done {
  (): void;
  fail: (err: any) => void;
}

////////  SPECS  /////////////

/// Delete this
describe('Smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent with new', function () {
    it('should instantiate component', () => {
      expect(new AppComponent()).not.toBeNull('Whoopie!');
    });
});

describe('AppComponent with TCB', function () {

  it('should instantiate component',
    injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      return tcb.createAsync(AppComponent).then(fixture => {
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
      });
    }));

  it('should have expected <h1> text',
    injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

      return tcb.createAsync(AppComponent).then(fixture => {
        // fixture.detectChanges();  // needed for a binding; we don't have a binding

        let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;  // it works

            h1 = fixture.debugElement.query(By.css('h1')).nativeElement;            // preferred

        expect(h1.innerText).toMatch(/angular 2 app/i, '<h1> should say something about "Angular 2 App"');
      });

    }));
});
