import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as shape from 'd3-shape';
import { LineAreaConvertable } from 'src/model/line-area/LineAreaConvertable';

@Component({
  selector: 'app-line-area',
  templateUrl: './line-area.component.html',
  styleUrls: ['./line-area.component.scss']
})
export class LineAreaComponent implements OnInit {

  @Input()
  items: LineAreaConvertable;

  multi: any[];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  timeline: boolean = false;
  colorScheme = {
    domain: ['#5843BE', '#f94144']
  };

  @Input()
  xAxisLabel: string;

  @Input()
  yAxisLabel: string;

  curve = shape.curveCardinal;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.items);
    this.multi = [this.items.convert()];
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
