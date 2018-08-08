# Albaangular

## Installation

## Installation
- Installera node.js (https://nodejs.org)
- Installera gulp genom att köra kommandot `npm install gulp-cli -g`
- Ladda ner/checka ut repositoryn i valfri mapp
- Öppna ett kommandofönster och gå till mappen med projektet
- Kör kommandot `npm install`, en "node_modules" mapp bör nu skapas och npm installerar nödvändiga paket
- Gå in i mappen `src/assets/semantic` och kör kommandot `gulp build`
- När kommandot kört klart navigera till rootmappen och kör kommandot `npm start`, öppna en webbläsare och navigera till (http://localhost:4200) för att se projektet

## Docker
- Kör kommandot `docker image build -t albazero` för att bygga en docker image
- När bygget är klart kan man köra `docker run -p 3000:80 --rm albazero` för att starta containern

## Development server

Run `ng serve` for a dev server. 
Navigate to `src/assets/semantic` and run `gulp build` to generate semantic css.
Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.
