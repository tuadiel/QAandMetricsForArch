import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'QualityMetricsInSoftwareArchitecture';

  display = true;
  displayAttributes = false;
  displayCluster = false;
  displayClusterImage = false;

  loadMetrics() {
    this.display = true;
    this.displayClusterImage = false;
    this.displayCluster = false;
    this.displayAttributes = false;

  }
  loadAttributes(){
    this.displayAttributes = true;
    this.display = false;
    this.displayCluster = false;
    this.displayClusterImage = false;


  }
  loadCluster(){
    this.displayCluster = true;
    this.displayAttributes = false;
    this.display = false;
    this.displayClusterImage = false;


  }

  loadClusterImage() {
    this.displayClusterImage = true;
    this.display = false;
    this.displayCluster = false;
    this.displayAttributes = false;
  }
}
