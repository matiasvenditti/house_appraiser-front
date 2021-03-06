import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';
import { LineAreaComponent } from './components/charts/line-area/line-area.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BubbleMapComponent } from './components/charts/bubble-map/bubble-map.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputCardComponent } from './components/input-card/input-card.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { SummaryItemComponent } from './components/summary-item/summary-item.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { LandingComponent } from './pages/landing/landing.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { HeatmapComponent } from './components/charts/heatmap/heatmap.component';
import { CoverComponent } from './components/cover/cover.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    PricingComponent,
    LineAreaComponent,
    BubbleMapComponent,
    InputCardComponent,
    SideNavComponent,
    SummaryItemComponent,
    SummaryPipe,
    LandingComponent,
    BarChartComponent,
    HeatmapComponent,
    CoverComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    InlineSVGModule.forRoot(),
    NgxChartsModule,
    MatGridListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
