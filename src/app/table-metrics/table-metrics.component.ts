import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  description: string;
  references: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Abstraction', description: 'Defined as the ratio of abstract classes in a component to the total number of\n' +
      'classes [12–14]. On the other hand, the work in [54] defines abstraction as the ratio of user defined\n' +
      'header files in a component to the total number of files', references: '<a href="http://www.inass.org/2018/2018083109.pdf\n" target="_blank" rel="noopener noreferrer">[12]</a><a href="https://dl.acm.org/doi/10.1145/2980258.2980459\n" target="_blank" rel="noopener noreferrer">[14]</a><a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'Architecture Adaptability', description: 'Defined as the amount of components needed to build the system in\n' +
      'relation to the number of components utilized by the most adaptable architecture would use [47]', references: '<a href="https://dl.acm.org/doi/abs/10.1016/j.jss.2013.07.053" target="_blank" rel="noopener noreferrer">[47]</a>'},
  {name: 'Automation of Concerns', description: 'Degree of difficulty in creating components, interfaces, and inter-\n' +
      'connections [27]', references: '<a href="https://dl.acm.org/doi/abs/10.1145/2602458.2602460" target="_blank" rel="noopener noreferrer">[27]</a>'},
  {name: 'Autonomy Ratio (AR)', description: 'Evaluates the independence level of a substructure when carrying out its responsibilities or providing services [20]', references: '<a href="https://dl.acm.org/doi/abs/10.1109/ASWEC.2014.17" target="_blank" rel="noopener noreferrer">[20]</a>'},
  {name: 'Availability', description: 'Defined in [54] as the percentage of components in a software design that can manage a big volume of data. In [22], it is presented as the ratio between the Mean Time To Failure (MTTF) over the sum of Mean Time To Repair (MTTR) and MTTF', references: '<a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[22]</a><a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'Average Weighted Degree', description: 'Average degree of the entire nodes in the complex network that models a software architecture [58]', references: '<a href="https://ieeexplore.ieee.org/document/8286359" target="_blank" rel="noopener noreferrer">[58]</a>'},
  {name: 'Average Shortest Path', description: 'Distance measure of a source to all other reachable destinations of the complex network that models a software architecture [58]', references: '<a href="https://ieeexplore.ieee.org/document/8286359" target="_blank" rel="noopener noreferrer">[58]</a>'},
  {name: 'Average Clustering Coefficient', description: 'Defined as the clustering coefficient of the whole complex network that models a software architecture [58]', references: '<a href="https://ieeexplore.ieee.org/document/8286359" target="_blank" rel="noopener noreferrer">[58]</a>'},
  {name: 'Best Practices Adherence', description: 'Measures the use of patterns or tactics appropriately in software architecture design [50]', references: '<a href="https://dl.acm.org/doi/10.1145/2578128.2578226" target="_blank" rel="noopener noreferrer">[50]</a>'},
  {name: 'Between Centrality', description: 'Measures the amount of shortest path that pass through a given node of a complex network that models a software architecture [58]', references: '<a href="https://ieeexplore.ieee.org/document/8286359" target="_blank" rel="noopener noreferrer">[58]</a>'},
  {name: 'Change Scenario Robustness', description: 'Measures how well suited an architecture is for defined change scenarios [50]', references: '<a href="https://dl.acm.org/doi/10.1145/2578128.2578226" target="_blank" rel="noopener noreferrer">[50]</a>'},
  {name: 'Cohesion', description: 'Measures the degree of cohesion among methods, classes, interfaces, functions, requirements and architecture’s components [12,44,56]', references: '<a href="http://www.inass.org/2018/2018083109.pdf\n" target="_blank" rel="noopener noreferrer">[12]</a><a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a><a href="https://dl.acm.org/doi/10.1145/2752489.2752496" target="_blank" rel="noopener noreferrer">[56]</a>'},
  {name: 'Complexity', description: 'Defined in various ways. It measures the number of methods (In O O programming) [12]. Another metric defines complexity as a metric to compute the structural complexity [21]. The work in [54] measures the complexity on the dependency graph or the source code. Finally, the work in [23] generates the control flow graph from the code, from whose structure the complexity of the code could be calculated', references: '<a href="http://www.inass.org/2018/2018083109.pdf\n" target="_blank" rel="noopener noreferrer">[12]</a><a href="https://www.sciencedirect.com/science/article/abs/pii/S0164121212003330 " target="_blank" rel="noopener noreferrer">[21]</a><a href="https://www.researchgate.net/publication/339902830_Towards_Metrics_for_Analyzing_System_Architectures_Modeled_with_EAST-ADL" target="_blank" rel="noopener noreferrer">[23]</a><a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'Composition', description: 'Measure of Aggregation (MOA) about components that cannot exist independent of the parent in Object Oriented Design [12]', references: '<a href="http://www.inass.org/2018/2018083109.pdf\n" target="_blank" rel="noopener noreferrer">[12]</a>'},
  {name: 'Confidentiality', description: 'Measures whether a document content is intercepted during its transference [49]. The metric exploits an architecture described as a stochastic activity networks', references: '<a href="https://link.springer.com/chapter/10.1007/978-3-319-24644-4_3" target="_blank" rel="noopener noreferrer">[49]</a>'},
  {name: 'Coupling/Decoupling', description: 'Defined in various ways. It is defined in [12] as the degree of Direct Class Coupling (DCC) (in Object Oriented programming). The work in [26] defines it as the degree to which packages are coupled to other packages. In [23] this metrics measures how strong the coupling of the classes of the system is. Coupling may also be based on the instability of architectural components like in [44] or can be computed as the number of dependencies between software components contained inside the packages (where one component belongs to one package, and the other component belongs to the other package on the same hierarchical level) [21]. Finally, in [39] the decoupling level measures how well the software is decoupled into small and independently replaceable modules', references: '<a href="http://www.inass.org/2018/2018083109.pdf\n" target="_blank" rel="noopener noreferrer">[12]</a><a href="https://www.sciencedirect.com/science/article/abs/pii/S0164121212003330 " target="_blank" rel="noopener noreferrer">[21]</a><a href="https://www.researchgate.net/publication/339902830_Towards_Metrics_for_Analyzing_System_Architectures_Modeled_with_EAST-ADL" target="_blank" rel="noopener noreferrer">[23]</a><a href="https://www.sciencedirect.com/science/article/abs/pii/S0164121211000574" target="_blank" rel="noopener noreferrer">[26]</a><a href="https://dl.acm.org/doi/abs/10.1145/2884781.2884825" target="_blank" rel="noopener noreferrer">[39]</a><a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a>'},
  {name: 'Decision Traceability', description: 'Characterizes how well architecture design decisions are connected to requirements [50]', references: '<a href="https://dl.acm.org/doi/10.1145/2578128.2578226" target="_blank" rel="noopener noreferrer">[50]</a>'},
  {name: 'Decomposition', description: 'Indicates whether or not modules are decomposed into sub-modules such that all modules keep a similar degree of decomposition at the lowest level [50]', references: '<a href="https://dl.acm.org/doi/10.1145/2578128.2578226" target="_blank" rel="noopener noreferrer">[50]</a>'},
  {name: 'Dependency of Concerns', description: 'Measures the degree of dependence between Functional Quality Attributes [27]', references: '<a href="https://dl.acm.org/doi/abs/10.1145/2602458.2602460" target="_blank" rel="noopener noreferrer">[27]</a>'},
  {name: 'Dependency Concentration', description: 'Measures the degree of the incoming file concentration of a dependency graph, is computed by dividing the total edges including the weights of the edges by the squared number of vertices of the dependency graph, that is a graphical representation of the project useful in the architectural analysis [54]', references: '<a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'Distance', description: 'Computes the balance between Abstraction [54] and Instability [54] metrics [54]. A value near 0 means that there is a good balance between them', references: '<a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'Encapsulation', description: 'Measures Data Access Metrics [12], that is, the ratio of the total number of private attributes in a class to the the total number of attributes in the class', references: '<a href="http://www.inass.org/2018/2018083109.pdf\n" target="_blank" rel="noopener noreferrer">[12]</a>'},
  {name: 'Energy Consumption', description: 'Described as a relation between the energy consumption of hardware and the computational resource usage on behalf of the software [28]', references: '<a href="https://dl.acm.org/doi/abs/10.1007/s00607-016-0502-0" target="_blank" rel="noopener noreferrer">[28]</a>'},
  {name: 'Evolvability', description: 'Measures software architecture evolvability by taking into account four architectural attributes (i.e., Understandability, Maintainability, Extendability, Testability) which have effects on evolvability analyzing process [59]', references: '<a href="https://www.researchgate.net/publication/336257409_Analyzing_Software_Architecture_Evolvability_Based_on_Multiple_Architectural_Attributes_Measurements" target="_blank" rel="noopener noreferrer">[59]</a>'},
  {name: 'Extensibility', description: 'Defined as the proportion of components in the software architecture that could be potentially extended [44]', references: '<a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a>'},
  {name: 'Failure Probability (FP)', description: 'Measures the Failure probability of components and ports [16]', references: '<a href="https://link.springer.com/chapter/10.1007/978-3-642-54092-9_2" target="_blank" rel="noopener noreferrer">[16]</a>'},
  {name: 'Fan-out/Fan-in Visibility', description: 'Captures how a project is coupled [54]. Fan-out Visibility represents how much an entity depends on other modules/files. Fan-in Visibility represents how much the other entities depend on a given module', references: '<a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'In/Out Degree (Fan-in/Fan-out)', description: 'Measures the number of incoming and outgoing edges from a node of the dependency graph [54]', references: '<a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'Graph Density', description: 'Measures how close the number of edges is to the maximal number of edges in a density graph of the source-code [54]', references: '<a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'Hierarchy', description: 'Measures the number of hierarchies in an Object Oriented Design [12]', references: '<a href="http://www.inass.org/2018/2018083109.pdf\n" target="_blank" rel="noopener noreferrer">[12]</a>'},
  {name: 'Independence Level', description: 'Measures how much of a system may be broken down into separate modules, meaning that modifying or replacing one module would not affect other modules in the same layer [39]', references: '<a href="https://dl.acm.org/doi/abs/10.1145/2884781.2884825" target="_blank" rel="noopener noreferrer">[39]</a>'},
  {name: 'Inheritance', description: 'Measures the “is-a” relationship between classes [13]', references: '<a href="https://link.springer.com/article/10.1007/s13319-018-0183-x" target="_blank" rel="noopener noreferrer">[13]</a>'},
  {name: 'Instability', description: 'Measures the number of dependencies that enter and leave the component [54]', references: '<a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'Interoperability', description: 'Proportion of components in the software architecture that is easy to integrate [44]', references: '<a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a>'},
  {name: 'Inter-Service Communication', description: 'Counting of unused resources and unreachable endpoints to analyze compatibility between microservices when communicating [3]', references: '<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7965739" target="_blank" rel="noopener noreferrer">[3]</a>'},
  {name: 'Maturity', description: 'Proportion of components in the software architecture that is implemented with the reuse of known patterns [44]', references: '<a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a>'},
  {name: 'Messaging', description: 'Measures the number of public methods that are available to other classes as services in Object Oriented paradigm [13]', references: '<a href="https://link.springer.com/article/10.1007/s13319-018-0183-x" target="_blank" rel="noopener noreferrer">[13]</a>'},
  {name: 'No.of Runnable and Inter-runnable per Software', description: 'Total number of runnable and inter-runnable variables in the software components, respectively [55]', references: '<a href="https://dl.gi.de/handle/20.500.12116/3921" target="_blank" rel="noopener noreferrer">[55]</a>'},
  {name: 'Polymorphism', description: 'Measures the ability to substitute objects with identical interfaces at runtime [13]', references: '<a href="https://link.springer.com/article/10.1007/s13319-018-0183-x" target="_blank" rel="noopener noreferrer">[13]</a>'},
  {name: 'Propagation Cost', description: 'Measures the proportion of the architecture elements affected when an element is changed in the system [39]', references: '<a href="https://dl.acm.org/doi/abs/10.1145/2884781.2884825" target="_blank" rel="noopener noreferrer">[39]</a>'},
  {name: 'Q-Value', description: 'Measures the fraction of the edges in a network that connect vertices of the same type in a dependency graph, which is a graphical representation of the project useful in the architectural analysis [54]', references: '<a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a>'},
  {name: 'Rationalization Completeness', description: 'Quantification of rationales and alternatives associated with architecture design decisions [50]', references: '<a href="https://dl.acm.org/doi/10.1145/2578128.2578226" target="_blank" rel="noopener noreferrer">[50]</a>'},
  {name: 'Reliability', description: 'Measures the likelihood of a software failure-free functioning within a given exposure time interval [42]', references: '<a href="https://onlinelibrary.wiley.com/doi/10.1002/qre.4680040321" target="_blank" rel="noopener noreferrer">[42]</a>'},
  {name: 'Requirement Fulfillment', description: 'Computed as the number of requirements associated with artifacts in the architecture model by total the number of requirements [50]', references: '<a href="https://dl.acm.org/doi/10.1145/2578128.2578226" target="_blank" rel="noopener noreferrer">[50]</a>'},
  {name: 'Resource and Client count', description: 'Measures microservice size by measuring the number of resources and clients involved in interactions between microservices and external services [3]', references: '<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7965739" target="_blank" rel="noopener noreferrer">[3]</a>'},
  {name: 'Response Time', description: 'Measures the time between when the user initiates an action, and when the computer starts to display the result [7]. On the other hand, the work in [18] defines it as the value of the clock when the states of all components and connectors are changed to “finished”', references: '<a href="https://ieeexplore.ieee.org/document/801854" target="_blank" rel="noopener noreferrer">[7]</a><a href="https://www.scitepress.org/papers/2015/53473/53473.pdf" target="_blank" rel="noopener noreferrer">[18]</a>'},
  {name: 'Responsibility', description: 'Percentage of software architecture components with a single responsibility [44]', references: '<a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a>'},
  {name: 'Scalability', description: 'Proportion of components in the software architecture that could be easily scaled [44]', references: '<a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a>'},
  {name: 'Separation of Concerns', description: 'Models each FQA separately from each other in order to identify the concerns and their dependencies, and avoid the duplication of concerns in different FQAs [27]', references: '<a href="https://dl.acm.org/doi/abs/10.1145/2602458.2602460" target="_blank" rel="noopener noreferrer">[27]</a>'},
  {name: 'Services Adaptability', description: 'Measures the adaptability of a software architecture when changes in the execution context of the system occur [47]', references: '<a href="https://dl.acm.org/doi/abs/10.1016/j.jss.2013.07.053" target="_blank" rel="noopener noreferrer">[47]</a>'},
  {name: 'Simplicity', description: 'Defined as the proportion of components in the architecture having a simple structure [44]', references: '<a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a>'},
  {name: 'Size', description: 'Defined in various ways. It is defined as the measure of the number of classes used in a design [13]. The works in [3, 23] define it as a measure of service size using the lines of code. In [56], metrics are presented in order to perform the analysis of architecture based on product line goals which are average input size and average output size. The work in [54] presents source code-based metrics as statics extracted from source code files. Finally, the works in [43,44] present the architecture size metric to measure the size of the software system', references: '<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7965739" target="_blank" rel="noopener noreferrer">[3]</a><a href="https://link.springer.com/article/10.1007/s13319-018-0183-x" target="_blank" rel="noopener noreferrer">[13]</a><a href="https://www.researchgate.net/publication/339902830_Towards_Metrics_for_Analyzing_System_Architectures_Modeled_with_EAST-ADL" target="_blank" rel="noopener noreferrer">[23]</a><a href="https://www.sciencedirect.com/science/article/pii/S1877050917300510" target="_blank" rel="noopener noreferrer">[43]</a><a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a><a href="https://ieeexplore.ieee.org/document/8754186" target="_blank" rel="noopener noreferrer">[54]</a><a href="https://dl.acm.org/doi/10.1145/2752489.2752496" target="_blank" rel="noopener noreferrer">[56]</a>'},
  {name: 'Suitability', description: 'Proportion of components in the software architecture that is well fitted for the required domain [44]', references: '<a href="https://www.sciencedirect.com/science/article/pii/S1877705817301042" target="_blank" rel="noopener noreferrer">[44]</a>'},
  {name: 'Throughput', description: 'Defined by [18] as a number of tasks processed over a specific period in a simulated software architecture. In [49] it is defined as a number of documents successfully displayed for users in a software architecture simulated with Stochastic Activity Networks', references: '<a href="https://www.scitepress.org/papers/2015/53473/53473.pdf" target="_blank" rel="noopener noreferrer">[18]</a><a href="https://link.springer.com/chapter/10.1007/978-3-319-24644-4_3" target="_blank" rel="noopener noreferrer">[49]</a>'},
  {name: 'Unused resource and unreachable endpoint count', description: 'Measures the service interconnection compatibility in microservice by counting the unused resources and unreachable endpoints [3]', references: '<a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7965739" target="_blank" rel="noopener noreferrer">[3]</a>'},
  {name: 'Variability of Concerns', description: 'Defined as a modeling of FQAs that concerns to the variables required by the base application [27]', references: '<a href="https://dl.acm.org/doi/abs/10.1145/2602458.2602460" target="_blank" rel="noopener noreferrer">[27]</a>'},
  {name: 'View Consistency', description: 'Based on the different views (e.g. static/dynamic/deployment views) that an architectural model may comprise. When these views are fused together, they may produce inconsistencies/contradictions that make the implementation difficult. This metric consists in a comparison between the normalized number of contradictions and a pool of collected architectures [50]', references: '<a href="https://dl.acm.org/doi/10.1145/2578128.2578226" target="_blank" rel="noopener noreferrer">[50]</a>'},

];

@Component({
  selector: 'app-table-metrics',
  templateUrl: './table-metrics.component.html',
  styleUrls: ['./table-metrics.component.css']
})

export class TableMetricsComponent implements OnInit {





  constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['name', 'description', 'references'];

  dataSource = ELEMENT_DATA;


  ngOnInit(): void {

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(MetricForm, {
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'metric-form',
  templateUrl: 'metric-form.html',
})
export class MetricForm {
  constructor(
    public dialogRef: MatDialogRef<MetricForm>
  ) {}
}


