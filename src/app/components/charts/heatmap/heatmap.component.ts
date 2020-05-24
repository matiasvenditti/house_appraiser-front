import { Component, OnInit, Input } from '@angular/core';
import {multi} from './data';
import { ChartConfiguration } from 'src/model/line-area/ChartConfiguration';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements OnInit {
  multi: any[];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  yAxisLabel: string = 'Year';
  view: any[] = [600, 300];

  colorScheme = {
    domain: ['#F6F5FC', '#5843BE']
  };

  @Input()
  config: ChartConfiguration;

  constructor() {
    Object.assign(this, { multi });
  }
  ngOnInit(): void {
    this.view = [this.config.width, this.config.height];
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
  
  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
