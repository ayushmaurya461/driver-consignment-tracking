import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DockModule } from 'primeng/dock';

@Component({
  selector: 'app-dock',
  standalone: true,
  imports: [CommonModule, DockModule],
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss'],
})
export class DockComponent {
  items: any;
  ngOnInit() {
    this.items = [
      {
        label: 'Accounting',
        icon: 'pi pi-calculator',
        url: 'accounting',
      },
      {
        label: 'Trips',
        icon: 'pi pi-truck',
        url: 'trips',
      },
      {
        label: 'Home',
        icon: 'pi pi-th-large',
        url: 'home',
      },
      {
        label: 'Maintenance',
        icon: 'pi pi-cog',
        url: 'maintenance',
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        url: 'profile',
      },
    ];
  }
  preventDefault(evnt: any) {
    evnt.preventDefault();
  }
}
