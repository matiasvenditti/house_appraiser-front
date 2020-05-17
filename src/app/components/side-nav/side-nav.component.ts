import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'src/model/MenuItem';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  contentIsOpen: boolean = true;
  menuIsOpen: boolean = false;

  menu: MenuItem;
  menuLinks: MenuItem[];

  current: MenuItem;

  constructor() {

    this.menuLinks = [
      new MenuItem("../../../assets/menu.svg", "Menu", null),
      new MenuItem("../../../assets/home.svg", "Home", ""),
      new MenuItem("../../../assets/bars.svg", "Dashboard", "dashboard"),
      new MenuItem("../../../assets/business.svg", "Pricing", "pricing"),
    ];

    this.menu = this.menuLinks[0];
  }

  ngOnInit(): void {
  }

  toggle() {
    this.contentIsOpen = !this.contentIsOpen;
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
