import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/model/MenuItem';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

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

  scrolled: boolean = false;

  constructor(private router: Router, private homeService: HomeService) {

    this.menuLinks = [
      new MenuItem("assets/menu.svg", "Menu", null),
      new MenuItem("assets/home.svg", "Home", "home"),
      new MenuItem("assets/bars.svg", "Dashboard", "dashboard"),
      new MenuItem("assets/business.svg", "Pricing", "pricing"),
    ];

    this.menu = this.menuLinks[0];
  }

  ngOnInit(): void {
    this.homeService.observable.subscribe(link => {
      if (link) {
        if (link.route == "dashboard") {
          this.select(this.menuLinks[3]);  
        }
        if (link.route == "pricing") {
          this.select(this.menuLinks[2]);  
        }
      }
    })
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

  handleScroll(targetId: string) {
    this.scroll(targetId);
    this.selectHome();
    this.router.navigateByUrl('sidenav/(menuRouter:home)');
  }

  scroll(targetId: string) {
    const element = document.getElementById(targetId);
    element.scrollIntoView({behavior: 'smooth'});
    setTimeout(() => {
      this.scrolled = true;
    }, 500);
  }

  selectHome() {
    const home = this.menuLinks.find(item => item.label === "Home");
    this.select(home);
  }
}
