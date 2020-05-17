import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MenuItem } from 'src/model/MenuItem';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state('menu-open', style({
        width: '30%'
      })),
      state('menu-closed', style({
        width: '10%'
      })),
      transition('menu-open <=> menu-close', [
        animate('0.3s')
      ]),
    ]),
  ],
})
export class SideBarComponent implements OnInit {

  @Output()
  menuToggleEmitter: EventEmitter<boolean> = new EventEmitter<boolean>()

  menuIsOpen: boolean = false;

  menu: MenuItem;

  menuLinks: MenuItem[];

  constructor() {
    this.menu = new MenuItem("assets/menu.svg", "Menu", null);

    this.menuLinks = [
      new MenuItem("assets/home.svg", "Home", ""),
      new MenuItem("assets/bars.svg", "Dashboard", "dashboard"),
      new MenuItem("assets/business.svg", "Pricing", "pricing"),
    ]
  }

  ngOnInit(): void {
  }

  toggle() {
    this.menuIsOpen = !this.menuIsOpen;
    this.menuToggleEmitter.emit(true);
  }

}
