import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsignmentsComponent } from './consignments/consignments.component';
import { AdvanceDetailsComponent } from './advance-details/advance-details.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, ConsignmentsComponent, AdvanceDetailsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
