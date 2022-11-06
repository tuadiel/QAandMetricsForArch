import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { TableMetricsComponent } from './table-metrics/table-metrics.component';
import {MatTableModule} from "@angular/material/table";
import { TableAttributesComponent } from './table-attributes/table-attributes.component';
import { ClusterAttributesComponent } from './cluster-attributes/cluster-attributes.component';
import {NgxGraphModule} from "@swimlane/ngx-graph";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { HttpClientModule } from "@angular/common/http";
import {MetricForm} from "./table-metrics/table-metrics.component";
import {AttributeForm} from "./table-attributes/table-attributes.component";

import { NgxEchartsModule } from "ngx-echarts";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    AppComponent,
    TableMetricsComponent,
    TableAttributesComponent,
    ClusterAttributesComponent,
    MetricForm,
    AttributeForm

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxEchartsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MatTableModule,
    NgxGraphModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
