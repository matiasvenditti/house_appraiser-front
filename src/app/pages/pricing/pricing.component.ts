import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PredictionService } from 'src/app/services/prediction.service';
import { CardInput } from 'src/model/CardInput';
import { MatSidenav } from '@angular/material/sidenav';
import { HttpEventType } from '@angular/common/http';
import { SummaryItem } from 'src/model/SummaryItem';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss'],
  animations: [
    trigger('emptyFull', [
      state('empty', style({
        backgroundPosition: 'right bottom'
      })),
      state('full', style({
        backgroundPosition: 'left bottom'
      })),
      transition('empty <=> full', [
        animate('0.7s')
      ]),
    ]),

    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.3s', style({ opacity: 1 })),
      ])
    ]),
  ]
})
export class PricingComponent implements OnInit {
  dimentions: CardInput[];
  equipment: CardInput[];
  bathroom: CardInput[];
  zone: CardInput[];
  antiquity: CardInput[];

  prediction: FormGroup;

  dimensionCols: number;
  equipmentCols: number;
  bathroomCols: number;

  results: SummaryItem[];

  isEmpty: boolean = true;
  doneInitializing: boolean = false;

  constructor(private fb: FormBuilder, private predictionService: PredictionService) {
    this.prediction = this.fb.group({
      total_surface: [null, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*")]],
      covered_surface: [null, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*")]],
      rooms: [null, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*")]],
      bathrooms: [null, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*")]],
      garages: [null, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*")]],
      bedrooms: [null, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*")]],
      toilettes: [null, [Validators.required, Validators.min(0), Validators.pattern("^[0-9]*")]],
      antiquity: [null, [Validators.required, Validators.min(0)]],
      zone: ['', Validators.required]
    });

    this.initializeControls();
  }

  ngOnInit(): void {
    this.setLayout(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setLayout(event.target.innerWidth);
  }

  predict() {
    this.isEmpty = false;
    this.predictionService.predict(this.prediction.value).subscribe((response: any) => {
      this.results = [new SummaryItem("Result", response.price)];
    })
  }

  setControls() {
    this.dimentions.map(this.initializeControl.bind(this));
    this.equipment.map(this.initializeControl.bind(this));
    this.bathroom.map(this.initializeControl.bind(this));
    this.zone.map(this.initializeControl.bind(this));
    this.antiquity.map(this.initializeControl.bind(this));
  }

  initializeControl(input: CardInput) {
    input.formControl = this.prediction.controls[input.controlName];
  }

  async openSummary(summary: MatSidenav) {
    await summary.open();
    this.getBackgroundAndSetLayout();
  }

  async closeSummary(summary: MatSidenav) {
    await summary.close();
    this.getBackgroundAndSetLayout();
  }

  async toggleSummary(summary: MatSidenav) {
    await summary.toggle();
    this.getBackgroundAndSetLayout();
  }

  checkForm(summary: MatSidenav) {
    if (this.prediction.touched && this.prediction.valid) {
      this.openSummary(summary);
    }
  }

  getBackgroundAndSetLayout() {
    const background = document.querySelector(".background") as HTMLElement;
    this.setLayout(background.offsetWidth);
  }

  setLayout(width) {
    if (width <= 700) {
      this.dimensionCols = 1;
      this.equipmentCols = 1;
      this.bathroomCols = 1;
    } else {
      this.dimensionCols = 2;
      this.equipmentCols = 3;
      this.bathroomCols = 2;
    }
  }

  toSummaryItems(items: CardInput[]): SummaryItem[] {
    return items.map(item => new SummaryItem(item.label, item.formControl.value));
  }

  onClose() {
    this.isEmpty = true;
  }

  async initializeControls() {
    this.dimentions = [
      new CardInput("number", "Total Surface", null, "total_surface", "Insert total surface in square meters", "assets/icons/area.svg"),
      new CardInput("number", "Covered Surface", null, "covered_surface", "Insert covered surface in square meters", "assets/icons/covered.svg"),
    ];

    this.equipment = [
      new CardInput("number", "Rooms", null, "rooms", "Insert number of rooms", "assets/icons/rooms.svg"),
      new CardInput("number", "Garages", null, "garages", "Insert amount of garages", "assets/icons/garages.svg"),
      new CardInput("number", "Bedrooms", null, "bedrooms", "Insert number of bedrooms", "assets/icons/bedrooms.svg"),
    ];

    this.bathroom = [
      new CardInput("number", "Bathrooms", null, "bathrooms", "Insert number of bathrooms", "assets/icons/bathrooms.svg"),
      new CardInput("number", "Toilettes", null, "toilettes", "Insert number of toilettes", "assets/icons/toilettes.svg"),
    ];

    const zones = await this.predictionService.getZones().toPromise();
    this.zone = [new CardInput("select", "Zone", null, "zone", "Select house zone", "assets/icons/zone.svg", zones)];
    
    this.antiquity = [new CardInput("number", "Age", null, "antiquity", "Specify house antiquity", "assets/icons/antiquity.svg")];
    this.setControls();
    this.doneInitializing = true;
  }
}

