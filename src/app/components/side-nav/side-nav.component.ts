import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/model/MenuItem';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '200px'
      })),
      state('open', style({
        width: '100px'
      })),
      transition('open <=> close', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class SideNavComponent implements OnInit {

  menuIsOpen: boolean = false;

  menu: MenuItem;
  menuLinks: MenuItem[];

  current: MenuItem;

  constructor() {

    this.menuLinks = [
      new MenuItem("assets/menu.svg", "Menu", null),
      new MenuItem("assets/home.svg", "Home", ""),
      new MenuItem("assets/bars.svg", "Dashboard", "dashboard"),
      new MenuItem("assets/business.svg", "Pricing", "pricing"),
    ];

    this.menu = this.menuLinks[0];
  }

  ngOnInit(): void {
  }

  toggle() {
    this.menuIsOpen = !this.menuIsOpen;
  }

  select(link: MenuItem): void {
    if (this.current) {
      this.current.deactivate();  
    }
    this.current = link;
    this.current.activate();
  }

  toggleAndSelect(link: MenuItem) {
    this.select(link);
    this.toggle();
  }
}
