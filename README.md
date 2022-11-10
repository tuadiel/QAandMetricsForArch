# QualityMetricsInSoftwareArchitecture



## Model driven engineering plugins

To put into practice the results we found during our research and keep the results up-to-date we propose a Framework which generates informative and aggregated web views of the metrics, quality attributes, quality characteristics, and their relationships. The proposed framework has been implemented with MDE techniques and it is based on a metamodel which allows us to define the quality the quality characteristics, quality attributes and metrics to measure the quality attributes.



Based on this framework we have implemented a Domain Specific Language (DSL) with xText allowing the textual definition for our quality repository. Indeed, this DSL is based on a grammar (derived from the metamodel), allowing software architects, practitioners, and researchers to define quality aspects and their relationships. Moreover, we have integrated rules inspired by the Bibtex grammar {https://slebok.github.io/zoo/markup/textual/bibtex/bibtex/hillairet/extracted/index.html} to allow contributors to directly work with bibtex entries in the DSL, to define research contributions. By using this DSL, contributors can define their own quality attributes and metrics and/or refine those provided by us (we call to the file containing these definitions as quality definition file).

## Step by step guide to install the DSL

### Pre-requisite:

* You should have an Eclipse IDE installed on your machine (in case you don’t have it download and install it from https://www.eclipse.org/downloads/ ).

* Install and Configure a web-server (e.g., MAMP). This web server will allows you to get a visual preview of the generated graph which is composed of quality characteristics, attributes and metrics.


### Steps:
* Download and install the xText plugin install the xtext plug-in into a running Eclipse.
	 *Step 1) Eclipse Help > Eclipse Marketplace
	 *Step 2) Install the plugin “Eclipse xText"
	 *Step 3) Restart Eclipse
Please refer to this link https://www.eclipse.org/Xtext/download.html for  more instructions.

* Run the configuration (upon running the configuration Eclipse will automatically open another Eclipse window which means that you will have two Eclipse running).


