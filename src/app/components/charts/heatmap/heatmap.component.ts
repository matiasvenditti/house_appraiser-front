import { Component, OnInit, Input } from '@angular/core';
import {multi} from './data';
import { ChartConfiguration } from 'src/model/line-area/ChartConfiguration';
import { HeatmapData } from 'src/model/heatmap/HeatmapData';
import { HeatmapConvertable } from 'src/model/heatmap/HeatmapConvertable';

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

  @Input()
  items: HeatmapConvertable;

  @Input()
  ascending: boolean;

  @Input()
  top: number;

  constructor() {
    Object.assign(this, { multi });
  }
  ngOnInit(): void {
    this.view = [this.config.width, this.config.height];
    this.multi = this.items.convert(this.ascending, this.top);
  }

  onSelect(data): void {
  }
  
  onActivate(data): void {
  }

  onDeactivate(data): void {
  }

}
