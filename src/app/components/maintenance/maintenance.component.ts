import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from 'src/app/shared/container/container.component';

@Component({
  selector: 'maintenance',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent {}
