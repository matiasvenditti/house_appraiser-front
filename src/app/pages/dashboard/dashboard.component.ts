import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { CoveredSurfaceData } from 'src/model/line-area/covered/CoveredSurfaceData';
import { TotalSurfaceData } from 'src/model/line-area/total/TotalSurfaceData';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  coveredSurface: CoveredSurfaceData;
  totalSurface: TotalSurfaceData;

  constructor(private dashboardService: DashboardService) {

    // [DISABLE MOCK]
    this.dashboardService.getCoveredSurfaceMock().subscribe(data => {
      this.coveredSurface = new CoveredSurfaceData(data);
    })

    // [DISABLE MOCK]
    this.dashboardService.getTotalSurfaceMock().subscribe(data => {
      this.totalSurface = new TotalSurfaceData(data);
    })
    
  }

  ngOnInit(): void {
  }

}
