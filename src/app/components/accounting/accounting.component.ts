import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from 'src/app/shared/container/container.component';

@Component({
  selector: 'app-accounting',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss'],
})
export class AccountingComponent {}
