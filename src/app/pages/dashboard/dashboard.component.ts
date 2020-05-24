import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { CoveredSurfaceData } from 'src/model/line-area/covered/CoveredSurfaceData';
import { TotalSurfaceData } from 'src/model/line-area/total/TotalSurfaceData';
import { ChartConfiguration } from 'src/model/line-area/ChartConfiguration';
import { BathroomData } from 'src/model/line-area/bathroom/BathroomData';
import { ZoneData } from 'src/model/bar-chart/zone/ZoneData';

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

  coveredConfig: ChartConfiguration = new ChartConfiguration("Covered Surface Pricing", "Curves", 500, 200);
  totalConfig: ChartConfiguration = new ChartConfiguration("Total Surface Pricing", "Curves", 500, 200);
  bathroomConfig: ChartConfiguration = new ChartConfiguration("Bathroom Pricing", "Curves", 1200, 200);
  zoneConfig: ChartConfiguration = new ChartConfiguration("Zone Distribution", "Zones", 1200, 200);
  expensiveConfig: ChartConfiguration = new ChartConfiguration("Average Price By Zone", "", 500, 200);

  constructor(private dashboardService: DashboardService) {

    // [DISABLE MOCK]
    this.dashboardService.getCoveredSurfaceMock().subscribe(data => {
      this.coveredSurface = new CoveredSurfaceData(data);
    });

    // [DISABLE MOCK]
    this.dashboardService.getTotalSurfaceMock().subscribe(data => {
      this.totalSurface = new TotalSurfaceData(data);
    });

    // [DISABLE MOCK]
    this.dashboardService.getBathroomPricesMock().subscribe(data => {
      this.bathrooms = new BathroomData(data);
    });

    // [DISABLE MOCK]
    this.dashboardService.getHousesByZoneMock().subscribe(data => {
      this.zones = new ZoneData(data);
    })
    
  }

  ngOnInit(): void {
  }

}
