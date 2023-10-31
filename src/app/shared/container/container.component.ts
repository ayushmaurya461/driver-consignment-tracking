import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  @Input() photo!: string;
  @Input() caption!: string;
}
