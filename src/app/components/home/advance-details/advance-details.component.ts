import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-advance-details',
  templateUrl: './advance-details.component.html',
  standalone: true,
  imports: [CommonModule, DialogModule, FormsModule],
  styleUrls: ['./advance-details.component.scss'],
})
export class AdvanceDetailsComponent {
  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
  hideDialog() {
    this.visible = false;
  }
}
