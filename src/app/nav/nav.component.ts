import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  login = false;

  constructor(
    private router: Router
  ) {
    router.events.forEach((event) => {

      if (event instanceof NavigationStart) {
        if (localStorage.getItem("jwt")) {
          this.login = true;
        } else {
          this.login = false;
        }
      }
    });
  }

  logout() {
    localStorage.removeItem("jwt");

    this.router.navigate(['/login']);
  }

  ngOnInit(): void {

  }

}
