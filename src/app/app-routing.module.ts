import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
    // {path: '', component: HomeComponent, outlet: 'menuRouter'},
    {path: 'dashboard', component: DashboardComponent, outlet: 'menuRouter'},
    {path: 'pricing', component: PricingComponent, outlet: 'menuRouter'}
  ]},
  {path: 'sidenav', component: SideNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
