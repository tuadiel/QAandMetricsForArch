import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-cluster-attributes',
  templateUrl: './cluster-attributes.component.html',
  styleUrls: ['./cluster-attributes.component.css']
})
export class ClusterAttributesComponent implements OnInit {
  options: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let data = [

      {
        name: "Functional Suitability",

        label: {
          normal: {
            show: true,
          }
        },
        itemStyle: { color: "#d0d0d0" }
      },
      {
        name: "Reliability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#d0d0d0" }
      },
      {
        name: "Security",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#d0d0d0" }
      },
      {
        name: "Usability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#d0d0d0" }
      },
      {
        name: "Portability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#d0d0d0" }
      },
      {
        name: "Performance Efficiency",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#d0d0d0" }
      },
      {
        name: "Maintainability",

        label: {
          normal: {
            show: true
          }
        },
        symbolSize: [210,60],
        itemStyle: { color: "#d0d0d0" }
      },
      {
        name: "Compatibility",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#d0d0d0" }
      },
      {
        name: "Accountability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Adaptability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Analyzability",

        label: {
          normal: {
            show: true
          }
        },
        symbolSize: [210,60],

        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Authenticity",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Availability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Clearness",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Cohesion",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Completeness",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Complexity",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Confidentiality",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Consistency",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Context Awareness",

        label: {
          normal: {
            show: true
          }
        },
        symbolSize: [210,60],

        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Correctness",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Discoverability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Evolvability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Extensibility",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Flexibility",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Functionality",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Integrity",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Interoperability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Maintainability Attribute",

        label: {
          normal: {
            show: true
          }
        },
        symbolSize: [210,60],

        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Maturity",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Modifiability",

        label: {
          normal: {
            show: true
          }
        },
        symbolSize: [210,60],

        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Modularity",

        label: {
          normal: {
            show: true
          }
        },
        symbolSize: [210,60],

        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Non-Repudiation",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Performance",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Portability Attribute",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Reliability Attribute",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Responsibility",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Reusability",

        label: {
          normal: {
            show: true
          }
        },
        symbolSize: [210,60],

        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Robustness",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Simplicity",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Scalability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Security Attribute",

        label: {
          normal: {
            show: true
          }
        },
        symbolSize: [210,60],

        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Stability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Suitability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Sustainability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Testability",

        label: {
          normal: {
            show: true
          }
        },
        symbolSize: [210,60],

        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Understandability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Usability Attribute",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#FF4444" }
      },
      {
        name: "Abstraction",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Architecture Adaptability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Automation of Concerns",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Autonomy Ratio (AR)",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Availability Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Average Weighted Degree",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Average Shortest Path",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Average Clustering Coefficient",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Best Practices Adherence",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Between Centrality",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Change Scenario Robustness",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Cohesion Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Complexity Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Composition",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Confidentiality Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Coupling/Decoupling",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Decision Traceability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Decomposition",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Dependability of Concerns",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Dependency Concentration",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Distance",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Encapsulation",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Energy Consumption",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Evolvability Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Extensibility Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Failure Probability (FP)",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "In/Out Degree (Fan-in/Fan-out)",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Fan-out/Fan-in Visibility",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Graph Density",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Hierarchy",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Independence Level",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Inheritance",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Instability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Interoperability Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Inter-Service Communication",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Maturity Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Messaging",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "No.of Runnable and Inter-runnable per Software",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Polymorphism",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Propagation Cost",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Q-Value",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Rationalization Completeness",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Reliability Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Requirement Fulfillment",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Resource and Client count",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Response Time",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Responsibility Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Scalability Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Separation of Concerns",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Services Adaptability",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Simplicity Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Size",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Suitability Metric",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Throughput",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Unused resource and unreachable endpoint count",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "Variability of Concerns",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },
      {
        name: "View Consistency",

        label: {
          normal: {
            show: true
          }
        },
        itemStyle: { color: "#6666FF" }
      },


    ];
    this.options = {

      tooltip: {},

      draggable: true,
      series: [
        {
          type: "graph",
          chartDataZoom: true,
          zoom: 0.3,

          layout: "force",
          symbolSize: [140,40],
          symbol: "circle",
          roam: true,
          label: {
            show: true,
          },
          draggable: true,
          force: {
            layoutAnimation: false,

            repulsion: 6000,
            gravity: 0.6
          },
          animation: false,
          animationDuration: 0,

          edgeSymbol: ["circle", "arrow"],
          edgeSymbolSize: [4, 10],
          edgeLabel: {
            normal: {
              textStyle: {
                fontSize: 20
              }
            }
          },
          data: data, emphasis: {
            focus: "adjacency",
          },
          // links: [],
          links: [
            {
              source: "Functional Suitability",
              target: "Completeness",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Functional Suitability",
              target: "Correctness",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Functional Suitability",
              target: "Consistency",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Functional Suitability",
              target: "Context Awareness",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Functional Suitability",
              target: "Suitability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Functional Suitability",
              target: "Functionality",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Reliability",
              target: "Maturity",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Reliability",
              target: "Reliability Attribute",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Reliability",
              target: "Availability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Reliability",
              target: "Responsibility",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Reliability",
              target: "Robustness",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Security",
              target: "Security Attribute",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Security",
              target: "Confidentiality",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Security",
              target: "Non-Repudiation",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Security",
              target: "Accountability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Security",
              target: "Authenticity",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Security",
              target: "Integrity",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Usability",
              target: "Usability Attribute",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Usability",
              target: "Flexibility",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Usability",
              target: "Understandability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Usability",
              target: "Simplicity",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Usability",
              target: "Discoverability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Portability",
              target: "Portability Attribute",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Portability",
              target: "Adaptability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Performance Efficiency",
              target: "Performance",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Compatibility",
              target: "Interoperability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Sustainability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Maintainability Attribute",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Stability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Modifiability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Reusability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Analyzability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Modularity",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Cohesion",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Complexity",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Testability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Extensibility",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Scalability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Clearness",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Maintainability",
              target: "Evolvability",
              lineStyle: {
                color: "#A063EB"
              }
            },
            {
              source: "Completeness",
              target: "Change Scenario Robustness",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Completeness",
              target: "Rationalization Completeness",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Correctness",
              target: "Requirement Fulfillment",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Consistency",
              target: "View Consistency",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Context Awareness",
              target: "Dependability of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Context Awareness",
              target: "Variability of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Context Awareness",
              target: "Automation of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Context Awareness",
              target: "Separation of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Context Awareness",
              target: "Dependency Concentration",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Suitability",
              target: "Suitability Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Suitability",
              target: "Inter-Service Communication",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Suitability",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Functionality",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maturity",
              target: "Maturity Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reliability Attribute",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reliability Attribute",
              target: "Reliability Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Availability",
              target: "Availability Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Availability",
              target: "Failure Probability (FP)",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Responsibility",
              target: "Responsibility Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Robustness",
              target: "Between Centrality",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Security Attribute",
              target: "Dependability of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Security Attribute",
              target: "Variability of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Security Attribute",
              target: "Automation of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Security Attribute",
              target: "Separation of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Security Attribute",
              target: "Dependency Concentration",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Confidentiality",
              target: "Coupling/Decoupling",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Confidentiality",
              target: "Confidentiality Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Confidentiality",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Confidentiality",
              target: "Polymorphism",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Confidentiality",
              target: "Hierarchy",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Non-Repudiation",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Non-Repudiation",
              target: "Hierarchy",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Non-Repudiation",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Accountability",
              target: "Polymorphism",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Accountability",
              target: "Hierarchy",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Accountability",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Authenticity",
              target: "Polymorphism",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Authenticity",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Authenticity",
              target: "Inheritance",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Integrity",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Integrity",
              target: "Inheritance",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Usability Attribute",
              target: "Dependency Concentration",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Usability Attribute",
              target: "Automation of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Usability Attribute",
              target: "Dependability of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Flexibility",
              target: "Propagation Cost",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Understandability",
              target: "Autonomy Ratio (AR)",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Understandability",
              target: "No.of Runnable and Inter-runnable per Software",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Simplicity",
              target: "Simplicity Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Discoverability",
              target: "Unused resource and unreachable endpoint count",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Portability Attribute",
              target: "Dependency Concentration",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Adaptability",
              target: "Services Adaptability",
              lineStyle: {
                color: "#666666"
              }
            },

            {
              source: "Adaptability",
              target: "Architecture Adaptability",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Performance",
              target: "Energy Consumption",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Performance",
              target: "Throughput",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Performance",
              target: "Response Time",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Performance",
              target: "Average Shortest Path",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Interoperability",
              target: "Interoperability Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Interoperability",
              target: "Resource and Client count",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Sustainability",
              target: "Energy Consumption",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Coupling/Decoupling",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Propagation Cost",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Average Clustering Coefficient",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Dependability of Concerns",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Fan-out/Fan-in Visibility",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Graph Density",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Instability",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Q-Value",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Distance",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Abstraction",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "Complexity Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Maintainability Attribute",
              target: "In/Out Degree (Fan-in/Fan-out)",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Stability",
              target: "Coupling/Decoupling",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modifiability",
              target: "Coupling/Decoupling",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modifiability",
              target: "Hierarchy",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modifiability",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modifiability",
              target: "Complexity Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modifiability",
              target: "Encapsulation",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modifiability",
              target: "Inheritance",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reusability",
              target: "Coupling/Decoupling",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reusability",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reusability",
              target: "Polymorphism",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reusability",
              target: "Hierarchy",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reusability",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reusability",
              target: "Abstraction",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reusability",
              target: "Average Weighted Degree",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reusability",
              target: "Complexity Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Reusability",
              target: "In/Out Degree (Fan-in/Fan-out)",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Analyzability",
              target: "Abstraction",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Analyzability",
              target: "Complexity Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Analyzability",
              target: "Coupling/Decoupling",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Analyzability",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Analyzability",
              target: "Inheritance",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Analyzability",
              target: "Encapsulation",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Analyzability",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "Composition",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "Complexity Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "In/Out Degree (Fan-in/Fan-out)",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "Independence Level",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "Messaging",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "Coupling/Decoupling",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "Hierarchy",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Modularity",
              target: "Inheritance",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Cohesion",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Complexity",
              target: "Complexity Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Complexity",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Complexity",
              target: "Propagation Cost",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Complexity",
              target: "No.of Runnable and Inter-runnable per Software",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Testability",
              target: "Complexity Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Testability",
              target: "In/Out Degree (Fan-in/Fan-out)",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Testability",
              target: "Messaging",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Testability",
              target: "Coupling/Decoupling",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Testability",
              target: "Size",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Testability",
              target: "Hierarchy",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Testability",
              target: "Cohesion Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Testability",
              target: "Inheritance",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Extensibility",
              target: "Extensibility Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Scalability",
              target: "Scalability Metric",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Scalability",
              target: "Messaging",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Clearness",
              target: "Decomposition",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Clearness",
              target: "Decision Traceability",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Clearness",
              target: "Best Practices Adherence",
              lineStyle: {
                color: "#666666"
              }
            },
            {
              source: "Evolvability",
              target: "Evolvability Metric",
              lineStyle: {
                color: "#666666"
              }
            },




          ],
          lineStyle: {
            normal: {
              opacity: 0.9,
              width: 2,
              curveness: 1
            }
          }
        }
      ]
    };
  }
}
