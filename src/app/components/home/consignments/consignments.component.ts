import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { expandCollapse } from 'src/app/shared/animations/expand-collapse.animation';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-consignments',
  standalone: true,
  imports: [CommonModule, DialogModule, FormsModule],
  templateUrl: './consignments.component.html',
  styleUrls: ['./consignments.component.scss'],
  animations: [expandCollapse],
})
export class ConsignmentsComponent {
  arr = [1, 2, 3, 4];
  expanded = false;
  podFile: any;
  podFileName: string = 'Choose File';
  track: any = {
    start: false,
    dealerPoint: false,
    delilvered: false,
  };

  expandCollapseCards() {
    this.expanded = !this.expanded;
  }

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
  }
  toggleInputPod() {
    const podInput = document.querySelector('#pod') as HTMLElement;
    if (podInput) {
      podInput.click();
    }
  }
  changeStatus(field: string) {
    this.track[field] = true;
  }
  setFileName(evnt: any) {
    if (evnt.target.files[0]?.name) {
      this.podFileName = evnt.target.files[0].name;
    } else {
      this.podFileName = 'Choose File';
    }
  }
}
