import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from 'src/app/shared/container/container.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'maintenance',
  standalone: true,
  imports: [CommonModule, ContainerComponent, FormsModule, DialogModule],
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent {
  active = 0;
  dueDialog = false;
  historyDialog = false;

  newRequest = {
    type: '',
    issue: '',
    desription: '',
  };

  typeOptions = [
    { id: 'engine', text: 'Engine' },
    { id: 'gear', text: 'Gear' },
    { id: 'electrical', text: 'Electrical' },
    { id: 'body', text: 'Body' },
    { id: 'hydraulic', text: 'Hydraulic' },
  ];

  changeActive(index: number) {
    this.active = index;
  }

  showDueDetails() {
    this.dueDialog = true;
  }

  showHistoryDetails() {
    this.historyDialog = true;
  }

  hideDueDialog() {
    this.dueDialog = false;
  }

  hideHistoryDialog() {
    this.historyDialog = false;
  }
}
