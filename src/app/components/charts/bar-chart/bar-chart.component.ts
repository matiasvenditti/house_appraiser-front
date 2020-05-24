import { Component, OnInit, Input } from '@angular/core';
import { single } from './data';
import { ChartConfiguration } from 'src/model/line-area/ChartConfiguration';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  colorScheme = {
    domain: ['#5843BE']
  };

  @Input()
  xAxisLabel: string;

  @Input()
  yAxisLabel: string;

  @Input()
  config: ChartConfiguration;

  constructor() {
    Object.assign(this, { single })
  }
  ngOnInit(): void {}

  onSelect(event) {
    console.log(event);
  }

}
