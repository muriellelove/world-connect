import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent implements OnInit {
  pageTitle = 'WorldConnect';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = event.urlAfterRedirects;
        if (route.includes('dashboard')) {
          this.pageTitle = 'Dashboard';
        } else if (route.includes('countries')) {
          this.pageTitle = 'Pays';
        } else if (route.includes('weather')) {
          this.pageTitle = 'Météo';
        } else {
          this.pageTitle = 'WorldConnect';
        }
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
