import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onScroll() {
    const scrollHeight = window.scrollY;
    const nav = document.querySelector('.nav');
    const navbar = nav?.querySelector('.navbar');
    if (scrollHeight > 90) {
      nav?.classList.add('box-shadow');
      navbar?.classList.add('scrolled');
    } else {
      if (nav?.classList.contains('box-shadow')) {
        nav.classList.remove('box-shadow');
        navbar?.classList.remove('scrolled');
      }
    }
  }
  ngOnInit(): void {}
}
