import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { CoveredSurfaceData } from 'src/model/line-area/covered/CoveredSurfaceData';
import { TotalSurfaceData } from 'src/model/line-area/total/TotalSurfaceData';
import { ChartConfiguration } from 'src/model/line-area/ChartConfiguration';
import { BathroomData } from 'src/model/line-area/bathroom/BathroomData';
import { ZoneData } from 'src/model/bar-chart/zone/ZoneData';
import { AveragePriceData } from 'src/model/bar-chart/average-price/AveragePriceData';
import {CoveredSurfaceItem} from "../../../model/line-area/covered/CoveredSurfaceItem";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  coveredSurface: CoveredSurfaceData;
  totalSurface: TotalSurfaceData;
  bathrooms: BathroomData;
  zones: ZoneData;

  expensiveAverage: AveragePriceData;
  afforadableAverage: AveragePriceData;

  coveredConfig: ChartConfiguration = new ChartConfiguration("Covered Surface Pricing", "Curves", 500, 200);
  totalConfig: ChartConfiguration = new ChartConfiguration("Total Surface Pricing", "Curves", 500, 200);
  bathroomConfig: ChartConfiguration = new ChartConfiguration("Bathroom Pricing", "Amount", 1200, 300);
  zoneConfig: ChartConfiguration = new ChartConfiguration("Zone Distribution", "Zones", 1200, 200);
  expensiveConfig: ChartConfiguration = new ChartConfiguration("Average Price By Zone", "", 500, 200);
  expensiveAverageConfig: ChartConfiguration = new ChartConfiguration("Top Most Expensive", "", 550, 300);
  affordableAverageConfig: ChartConfiguration = new ChartConfiguration("Top Most Affordable", "", 550, 300);

  constructor(private dashboardService: DashboardService) {

    this.dashboardService.getCoveredSurface().subscribe(data => {

      data.map(item => {
        item.covered_surface <= 250 ? item.covered_surface = 250 :
        item.covered_surface <= 500 ? item.covered_surface = 500 :
        item.covered_surface <= 750 ? item.covered_surface = 750 :
        item.covered_surface <= 1000 ? item.covered_surface = 1000 :
        item.covered_surface <= 1250 ? item.covered_surface = 1250 :
        item.covered_surface = 1500
      });

      let group = data.reduce((r, a) => {
        r[a.covered_surface] = [...r[a.covered_surface] || [], a];
        return r;
      }, {});

      Object
        .keys(group)
        .forEach(key => group[key] = { covered_surface: `[${Number.parseInt(key) - 250}, ${key}]`, average_price: getAveragePrice(group[key]) })

      data = Object.values(group);
      console.log(data);
      this.coveredSurface = new CoveredSurfaceData(data);
    });

    this.dashboardService.getTotalSurface().subscribe(data => {
      this.totalSurface = new TotalSurfaceData(data);
    });

    this.dashboardService.getBathroomPrices().subscribe(data => {
      data = data.sort((a, b) => a.bathrooms - b.bathrooms)
      this.bathrooms = new BathroomData(data);
    });

    this.dashboardService.getHousesByZone().subscribe(data => {
      this.zones = new ZoneData(data.slice(0, 5));
    });

    this.dashboardService.getAveragePriceByZone("asc", 5).subscribe(data => {
      this.expensiveAverage = new AveragePriceData(data);
    });

    this.dashboardService.getAveragePriceByZone("desc", 5).subscribe(data => {
      this.afforadableAverage = new AveragePriceData(data);
    });

    const getAveragePrice = (items: CoveredSurfaceItem[]) => {
      let sum = 0;
      items.forEach(item => sum += item.average_price);
      return Math.ceil(sum / items.length);
    }
  }

  ngOnInit(): void {
  }

}
