import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { CoveredSurfaceData } from 'src/model/line-area/covered/CoveredSurfaceData';
import { TotalSurfaceData } from 'src/model/line-area/total/TotalSurfaceData';
import { LineConfiguration } from 'src/model/line-area/LineConfiguration';
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

  coveredConfig: LineConfiguration = new LineConfiguration("Covered Surface", "Curves");
  totalConfig: LineConfiguration = new LineConfiguration("Total Surface", "Curves");
  bathroomConfig: LineConfiguration = new LineConfiguration("Amount of Bathrooms", "Curves");

  constructor(private dashboardService: DashboardService) {

    // [DISABLE MOCK]
    this.dashboardService.getCoveredSurfaceMock().subscribe(data => {
      this.coveredSurface = new CoveredSurfaceData(data);
    });

    // [DISABLE MOCK]
    this.dashboardService.getTotalSurfaceMock().subscribe(data => {
      this.totalSurface = new TotalSurfaceData(data);
    });

    this.dashboardService.getBathroomPricesMock().subscribe(data => {
      this.bathrooms = new BathroomData(data);
    })
    
  }

  ngOnInit(): void {
  }

}
