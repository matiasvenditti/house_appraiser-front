import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as shape from 'd3-shape';
import { LineAreaConvertable } from 'src/model/line-area/LineAreaConvertable';
import { ChartConfiguration } from 'src/model/line-area/ChartConfiguration';

@Component({
  selector: 'app-line-area',
  templateUrl: './line-area.component.html',
  styleUrls: ['./line-area.component.scss']
})
export class LineAreaComponent implements OnInit {

  @Input()
  items: LineAreaConvertable;

  multi: any[];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = false;
  view: any[] = [700, 300];
  colorScheme = {
    domain: ['#5843BE']
  };

  @Input()
  xAxisLabel: string;

  @Input()
  yAxisLabel: string;

  @Input()
  config: ChartConfiguration;

  curve = shape.curveCardinal;

  constructor() {
  }

  ngOnInit(): void {
    this.multi = [this.items.convert()];
    this.view = [this.config.width, this.config.height];
  }

  onSelect(data): void {
  }

  onActivate(data): void {
  }

  onDeactivate(data): void {
  }
}
