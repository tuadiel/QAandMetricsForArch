# QualityMetricsInSoftwareArchitecture

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

#Installing web app with Angular

These are the command to install the Angular Web Application

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

# Model driven engineering plugins

To put into practice the results we found during our research and keep the results up-to-date we propose a Framework which generates informative and aggregated web views of the metrics, quality attributes, quality characteristics, and their relationships. The proposed framework has been implemented with MDE techniques and it is based on a metamodel which allows us to define the quality the quality characteristics, quality attributes and metrics to measure the quality attributes.



Based on this framework we have implemented a Domain Specific Language (DSL) with xText allowing the textual definition for our quality repository. Indeed, this DSL is based on a grammar (derived from the metamodel), allowing software architects, practitioners, and researchers to define quality aspects and their relationships. Moreover, we have integrated rules inspired by the Bibtex grammar {https://slebok.github.io/zoo/markup/textual/bibtex/bibtex/hillairet/extracted/index.html} to allow contributors to directly work with bibtex entries in the DSL, to define research contributions. By using this DSL, contributors can define their own quality attributes and metrics and/or refine those provided by us (we call to the file containing these definitions as quality definition file).

## Step by step guide to install the DSL

### Pre-requisite:

-Download and install Eclipse IDE from https://www.eclipse.org/downloads/ (if you already have an Eclipse IDE installed on your machine  skip this step)

-Install and Configure a web-server (e.g., MAMP). This web server will allows you to get a visual preview of the generated graph which is composed of quality characteristics, attributes and metrics.

### Steps:
-Download and install Eclipse IDE from https://www.eclipse.org/downloads/ (if you already have an Eclipse IDE installed on your machine  skip this step)
- https://www.eclipse.org/Xtext/download.html
	 -Eclipse Help > Eclipse Marketplace
	 -Install the plugin “Eclipse xText"
	 -Restart Eclipse
-Download the plugins files located in the plugins folder and import them into eclipse.
-Run the configuration (upon running the configuration Eclipse will automatically open another Eclipse window which means that you will have two Eclipse running).

