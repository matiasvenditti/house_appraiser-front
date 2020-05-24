import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { CoveredSurfaceData } from 'src/model/line-area/covered/CoveredSurfaceData';
import { TotalSurfaceData } from 'src/model/line-area/total/TotalSurfaceData';
import { ChartConfiguration } from 'src/model/line-area/ChartConfiguration';
import { BathroomData } from 'src/model/line-area/bathroom/BathroomData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  coveredSurface: CoveredSurfaceData;
  totalSurface: TotalSurfaceData;
  bathrooms: BathroomData;

  coveredConfig: ChartConfiguration = new ChartConfiguration("Covered Surface", "Curves");
  totalConfig: ChartConfiguration = new ChartConfiguration("Total Surface", "Curves");
  bathroomConfig: ChartConfiguration = new ChartConfiguration("Amount of Bathrooms", "Curves");
  zoneConfig: ChartConfiguration = new ChartConfiguration("Zone Distribution", "Zones");

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
    })
    
  }

  ngOnInit(): void {
  }

}
