## Angular Documentation QuickStart Changelog
Upgraders: for a fresh start, consider running these commands 
* `git clean -xdf` 
* `npm install`

<a name="0.2.22"></a>
# 0.2.22 (2017-01-05)
* Add `non-essential-files.txt` and instructions to use it to README

<a name="0.2.21"></a>
# 0.2.21 (2016-12-14)
* Update to in-memory-web-api v.0.2.1

<a name="0.2.20"></a>
# 0.2.20 (2016-12-07)
* Update to Angular 2.3.0

<a name="0.2.19"></a>
# 0.2.19 (2016-11-30)
* remove upgrade mappings from `systemjs.config.js` PR #301

<a name="0.2.18"></a>
# 0.2.18 (2016-11-30)
* remove `exclude` clause from `tsconfig.json`; it was just confusing people
* karma.config + karma-test-shim can handle multiple spec source paths (issue #294)
* cosmetic `app.component.spec.ts` changes
* cosmetic `karma.config.js` changes

<a name="0.2.17"></a>
# 0.2.17 (2016-11-16)
* Conform to updated QuickStart advice
  * removed docker everywhere (was nice but not necessary)
  * removed wallaby
  * shrink styles.css
  * refine tsconfig.json
  * `AppComponent` uses interpolation

<a name="0.2.16"></a>
# 0.2.16 (2016-11-14)
* Update to Angular 2.2.0

<a name="0.2.15"></a>
# 0.2.15 (2016-10-29)
* Revert to Jasmine 2.4.1 because bug in 2.5.x (see [jasmine issue #1231](https://github.com/jasmine/jasmine/issues/1231))

<a name="0.2.14"></a>
# 0.2.14 (2016-10-29)
* Remove bootstrap.css install
* Angular v2.1.2

<a name="0.2.13"></a>
# 0.2.13 (2016-10-20)
* Protractor 4
* Move from `typings` to `@types`. See `tsconfig.json` changes.
* Angular v2.1.1

<a name="0.2.12"></a>
# 0.2.12 (2016-10-06)
* Angular v2.1.0

<a name="0.2.11"></a>
# 0.2.11 (2016-10-06)
* Angular v2.0.2
* License is MIT
* Current testing configuration
* No code changes

<a name="0.2.10"></a>
# 0.2.10 (2016-09-19)
* All "Angular 2" references become just "Angular"
* No code changes

<a name="0.2.9"></a>
# 0.2.9 (2016-09-14)
* Angular 2.0.0 version
* Update to Typescript 2.0.2
* Fix e2e test missing dir

<a name="0.2.8"></a>
# 0.2.8 (2016-09-01)
* remove @angular test libraries from system.js (now in shim)
* update test related files
* wallaby doesn't completely work. Researching.

<a name="0.2.7"></a>
# 0.2.7 (2016-08-31)
* Angular 2 RC6 version
* Updated new forms, router, angular2-in-memory-web-api, karma, core-js, rxjs and zone.js packages
* Removed router-deprecated package
* Updated karma.conf.js and systemjs.config.js

<a name="0.2.6"></a>
# 0.2.6 (2016-08-09)
* Angular 2 RC5 version
* Updated new forms, router and angular2-in-memory-web-api

<a name="0.2.5"></a>
# 0.2.5 (2016-06-30)
* Angular 2 RC4 version
* Updated new forms and router

<a name="0.2.4"></a>
# 0.2.4 (2016-06-21)
* Angular 2 RC3 version
* Add new forms and router
* Add support for TS e2e tests

<a name="0.2.3"></a>
# 0.2.3 (2016-06-15)
* Angular 2 RC2 version

<a name="0.2.2"></a>
# 0.2.2 (2016-05-21)
* Update to Typings 1.x

<a name="0.2.1"></a>
# 0.2.1 (2016-05-03)
* Angular 2 RC01 version
  
<a name="0.2.0"></a>
# 0.2.0 (2016-05-02)
* Angular 2 RC0 version
  
<a name="0.1.17"></a>
# 0.1.17 (2016-04-29)
* update packages
  * Angular 2 beta 17
  * RxJS 5.0.0-beta.6
  * a2-in-memory-web-api 0.1.17

<a name="0.1.16"></a>
# 0.1.16 (2016-04-26)
* update packages
  * Angular 2 beta 16
  * a2-in-memory-web-api 0.1.6
  * protractor 3.3.0
  * typings 0.8.1
  * zone.js 0.6.12

 * added favicon.ico

 * testing
   - updated wallaby.js and karma.conf.js
   - updated app.component.spec.ts


 <a name="0.1.15"></a>
# 0.1.15 (2016-04-13)
* Add testing support
  * npm scripts
  * karma/jasmine
  * protractor

* update packages
  * Angular 2 beta 15
  * lite-server 2.2.0
  * systemjs 0.19.26
  * typescript 1.8.10
  * typings 0.7.12

* add run packages
  * a2-in-memory-web-api

* add testing dev-dependency packages
  * canonical-path: 0.0.2,
  * http-server: ^0.9.0,
  * jasmine-core: ~2.4.1,
  * karma: ^0.13.22,
  * karma-chrome-launcher: ^0.2.3,
  * karma-cli: ^0.1.2,
  * karma-htmlfile-reporter: ^0.2.2,
  * karma-jasmine: ^0.3.8,
  * protractor: ^3.2.2,
  * rimraf: ^2.5.2  

<a name="0.1.14"></a>
# 0.1.14 (2016-04-07)
* update packages
  * Angular 2 beta 14
  * lite-server 2.2.0
  * typings 0.7.12

<a name="0.1.13"></a>
# 0.1.13 (2016-03-31)
* update packages
  * Angular 2 beta 13

<a name="0.1.12"></a>
# 0.1.12 (2016-03-23)
* update packages
  * Angular 2 beta 12
  * zones 0.6.6
* remove es6-promise because no longer needed.

<a name="0.1.11"></a>
# 0.1.11 (2016-03-18)
* update packages
  * Angular 2 beta 11
  * zones 0.6.4
  * typescript 1.8.9
  * typings 0.7.9
