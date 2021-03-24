# DatavizApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Package dependencies

Run `npm i` to install all package depencencies : 

Check in node_modules folder:
-materialize-css package

Check in angular.json file:
"styles": [
  "./node_modules/materialize-css/dist/css/materialize.min.css",
],
"scripts": [
  "./node_modules/materialize-css/dist/js/materialize.min.js"
]

## Use Vega
In index.html file : 
<script src="https://cdn.jsdelivr.net/npm/vega@5"></script>

check chart-detail component:
In chart-detail.component.ts we need to use:
-declare var vega: any;
-vegaView: any;
-getVegaView() {
    this.vegaView = new vega.View(vega.parse(`specification json chart`))
      .renderer('svg')
      .initialize('#vega-view')
      .width()
      .height()
      .hover();
    return this.vegaView.runAsync();
  }
In chart-detail.component.html we need to use:
-<div id="vega-view"></div>

## Development server

Run `ng serve` or `ng serve --open` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
