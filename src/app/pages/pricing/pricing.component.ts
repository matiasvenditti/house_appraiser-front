import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PredictionService } from 'src/app/services/prediction.service';
import { CardInput } from 'src/model/CardInput';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {
  dimentions: CardInput[] = [
    new CardInput("number", "Total Surface", null, "total_surface", "Insert total surface in square meters", "assets/icons/area.svg"),
    new CardInput("number", "Covered Surface", null, "covered_surface", "Insert covered surface in square meters", "assets/icons/covered.svg"),
  ];

  equipment: CardInput[] = [
    new CardInput("number", "Rooms", null, "rooms", "Insert number of rooms", "assets/icons/rooms.svg"),
    new CardInput("number", "Garages", null, "garages", "Insert amount of garages", "assets/icons/garages.svg"),
    new CardInput("number", "Bedrooms", null, "bedrooms", "Insert number of bedrooms", "assets/icons/bedrooms.svg"),
  ];

  bathroom: CardInput[] = [
    new CardInput("number", "Bathrooms", null, "bathrooms", "Insert number of bathrooms", "assets/icons/bathrooms.svg"),
    new CardInput("number", "Toilettes", null, "toilettes", "Insert number of toilettes", "assets/icons/toilettes.svg"),
  ];

  zone: CardInput = new CardInput("text", "Zone", null, "zone", "Select house zone", "assets/icons/zone.svg");

  antiquity: CardInput = new CardInput("number", "Antiquity", null, "antiquity", "Specify house antiquity", "assets/icons/antiquity.svg");

  prediction: FormGroup;

  constructor(private fb: FormBuilder, private predictionService: PredictionService) {
    this.prediction = this.fb.group({
      total_surface: [null, [Validators.required, Validators.min(0)]],
      covered_surface: [null, [Validators.required, Validators.min(0)]],
      rooms: [null, [Validators.required, Validators.min(0)]],
      bathrooms: [null, [Validators.required, Validators.min(0)]],
      garages: [null, [Validators.required, Validators.min(0)]],
      bedrooms: [null, [Validators.required, Validators.min(0)]],
      toilettes: [null, [Validators.required, Validators.min(0)]],
      antiquity: [null, [Validators.required, Validators.min(0)]],
      zone: ['', Validators.required]
    });

    this.setControls();
  }

  ngOnInit(): void {
  }

  predict() {
    console.log(this.prediction.value);
    this.predictionService.predict(this.prediction.value).subscribe(response => {
      console.log(response);
    })
  }

  setControls() {
    this.dimentions.map(this.initializeControl.bind(this));
    this.equipment.map(this.initializeControl.bind(this));
    this.bathroom.map(this.initializeControl.bind(this));
    this.initializeControl(this.zone);
    this.initializeControl(this.antiquity);
  }

  initializeControl(input: CardInput) {
    input.formControl = this.prediction.controls[input.controlName];
  }
}
