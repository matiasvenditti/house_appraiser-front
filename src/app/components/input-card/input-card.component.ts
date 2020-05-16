import { Component, OnInit, Input } from '@angular/core';
import { CardInput } from 'src/model/CardInput';

@Component({
  selector: 'app-input-card',
  templateUrl: './input-card.component.html',
  styleUrls: ['./input-card.component.scss']
})
export class InputCardComponent implements OnInit {

  @Input()
  input: CardInput

  constructor() { }

  ngOnInit(): void {
  }

}
