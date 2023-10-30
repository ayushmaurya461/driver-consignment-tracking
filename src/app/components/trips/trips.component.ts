import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContainerComponent } from 'src/app/shared/container/container.component';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss'],
})
export class TripsComponent {}
