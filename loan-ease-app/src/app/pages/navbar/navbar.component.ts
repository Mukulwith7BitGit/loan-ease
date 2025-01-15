import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {
  ngOnInit(): void {
    let prevScrollPosition = window.pageYOffset;
    let navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      let currentScrollPosition = window.pageYOffset;

      if (navbar) {
        if (currentScrollPosition > prevScrollPosition) {
          // scrolling down
          navbar.style.transform = 'translateY(-100%)';
        } else {
          // scrolling up
          navbar.style.transform = 'translateY(0)';
        }
      }

      prevScrollPosition = currentScrollPosition;
    });
  }

}
