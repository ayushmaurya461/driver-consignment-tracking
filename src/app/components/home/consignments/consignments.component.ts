import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { expandCollapse } from 'src/app/shared/animations/expand-collapse.animation';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';

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
  visible: boolean = false;
  podFile: any;
  podFileName: string | undefined = 'Choose File';
  track: any = {
    start: false,
    dealerPoint: false,
    delilvered: false,
  };

  expandCollapseCards() {
    this.expanded = !this.expanded;
  }


  showDialog() {
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
  }
  async selectFromFiles() {
    await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    }).then(image => {
      if (image) {
        this.podFile = image.dataUrl;
        this.podFileName = 'Change'
      }
    });
  }
  changeStatus(field: string) {
    this.track[field] = true;
  }
  removePod() {
    this.podFile = '';
    this.podFileName = 'Choose File';
  }
}
