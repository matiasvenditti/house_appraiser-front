import { Component, OnInit, Input } from '@angular/core';
import { ChartConfiguration } from 'src/model/line-area/ChartConfiguration';
import { BarChartConvertable } from 'src/model/bar-chart/BarChartConvertable';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input()
  items: BarChartConvertable;

  single: any[];
  multi: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false; 
  showXAxisLabel = true;
  showYAxisLabel = true;
  view: any[] = [1500, 300];

  colorScheme = {
    domain: ['#5843BE']
  };

  @Input()
  xAxisLabel: string;

  @Input()
  yAxisLabel: string;

  @Input()
  config: ChartConfiguration;

  @Input()
  legend: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.single = this.items.convert().series;
    this.view = [this.config.width, this.config.height];
  }

  onSelect(event) {
  }

}
