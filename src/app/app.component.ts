import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockComponent } from './shared/dock/dock.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { routerAnimation } from './shared/animations/router.animation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DockComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerAnimation],
})
export class AppComponent {
  title = 'driver-app';
}
