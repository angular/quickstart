# local deps
npm i

# transpile angular2
cd node_modules/angular2
npm i
cd es6/prod
node es5build.js -d ../../../../angular2
cd ../../../

# transpile runtime type assertions
cd rtts_assert
npm i
cd es6
node es5build.js -d ../../../rtts_assert
