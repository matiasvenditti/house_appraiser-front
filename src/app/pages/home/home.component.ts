import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MenuItem } from 'src/model/MenuItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('openClose', [
      state('content-open', style({
        width: '90%',
      })),
      state('content-closed', style({
        width: '70%',
      })),
      transition('content-open <=> content-close', [
        animate('0.3s')
      ]),

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
export class HomeComponent implements OnInit {

  contentIsOpen: boolean = true;
  menuIsOpen: boolean = false;

  menu: MenuItem;
  menuLinks: MenuItem[];

  current: MenuItem;

  constructor(private router: Router) {

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

  redirectPricing() {
    this.router.navigateByUrl('/sidenav/(menuRouter:pricing)')
  }

  redirectDashboard() {
    this.router.navigateByUrl('/sidenav/(menuRouter:dashboard)')
  }
}
