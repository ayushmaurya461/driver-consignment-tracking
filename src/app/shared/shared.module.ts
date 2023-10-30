import { NgModule } from '@angular/core';
import { DockComponent } from './dock/dock.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [DockComponent, NavbarComponent, FooterComponent],
  exports: [DockComponent, NavbarComponent, FooterComponent],
})
export class SharedComponentsModule {}
