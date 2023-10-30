import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from 'src/app/shared/container/container.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {}
