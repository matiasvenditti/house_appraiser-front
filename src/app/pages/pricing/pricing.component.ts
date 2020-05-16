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
    new CardInput("text", "Total Surface", null),
    new CardInput("text", "Covered Surface", null),
  ];

  equipment: CardInput[] = [
    new CardInput("number", "Rooms", null),
    new CardInput("number", "Garages", null),
    new CardInput("number", "Bedrooms", null),
  ];

  bathroom: CardInput[] = [
    new CardInput("number", "Bathrooms", null),
    new CardInput("number", "Toilettes", null),
  ];

  zone: CardInput = new CardInput("text", "Zone", null);

  antiquity: CardInput = new CardInput("text", "Antiquity", null);

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
    })
  }

  ngOnInit(): void {
  }

  predict() {
    this.predictionService.predict(this.prediction.value).subscribe(response => {
      console.log(response);
    })
  }

}
