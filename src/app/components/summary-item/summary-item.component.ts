import { Component, OnInit, Input } from '@angular/core';
import { CardInput } from 'src/model/CardInput';
import { SummaryItem } from 'src/model/SummaryItem';

@Component({
  selector: 'app-summary-item',
  templateUrl: './summary-item.component.html',
  styleUrls: ['./summary-item.component.scss']
})
export class SummaryItemComponent implements OnInit {

  @Input()
  items: SummaryItem[];

  @Input()
  result: boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
