import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { expandCollapse } from 'src/app/shared/animations/expand-collapse.animation';

@Component({
  selector: 'app-consignments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consignments.component.html',
  styleUrls: ['./consignments.component.scss'],
  animations: [expandCollapse],
})
export class ConsignmentsComponent {
  arr = [1, 2, 3, 4];
  expanded = false;

  expandCollapseCards() {
    this.expanded = !this.expanded;
  }
}
