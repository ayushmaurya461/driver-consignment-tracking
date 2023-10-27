import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-consignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consignments.component.html',
  styleUrls: ['./consignments.component.scss'],
})
export class ConsignmentsComponent {
  arr = [1, 2, 3, 4];
}
