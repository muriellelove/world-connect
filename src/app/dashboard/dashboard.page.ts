import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false,

})
export class DashboardPage {
  user: any;
  countryCount = 0;
  weatherCount = 0;
  lastVisited = null as string | null;

  constructor(private auth: AuthService, private router: Router) {
    this.user = this.auth.getUser();
    this.loadStats();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  loadStats() {
    // Mock pour l'instant
    this.countryCount = 250;
    this.weatherCount = 40;
    this.lastVisited = localStorage.getItem('last_country');
  }

  goToRandomCountry() {
    // Plus tard → appel d’un service qui retourne un pays aléatoire
    this.router.navigate(['/countries', 'france']);
  }

  goToLastVisited() {
    if (this.lastVisited) {
      this.router.navigate(['/countries', this.lastVisited]);
    }
  }
}

