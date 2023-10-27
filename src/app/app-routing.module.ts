import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountingComponent } from './components/accounting/accounting.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { TripsComponent } from './components/trips/trips.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'profile', component: ProfileComponent },
  { path: 'accounting', component: AccountingComponent },
  { path: 'maintenance', component: MaintenanceComponent },
  { path: 'trips', component: TripsComponent },
];
