import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';

// IMPORT FA-ICONS
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faInfoCircle,
  faUpRightFromSquare,
  faSortDown,
  faPlus,
  faChevronDown,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

// IMPORTS CDK
import { OverlayModule } from '@angular/cdk/overlay';

// IMPORTS COMPONENTS
import { BtnComponent } from '../btn/btn.component';

// SERVICES
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    BtnComponent,
    FontAwesomeModule,
    OverlayModule,
    RouterLinkWithHref,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  isOpen = false;
  isOpenTheme = false;

  // ICONS
  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faUpRightFromSquare = faUpRightFromSquare;
  faSortDown = faSortDown;
  faPlus = faPlus;
  faChevronDown = faChevronDown;
  faMagnifyingGlass = faMagnifyingGlass;

  user: User | null = null;

  ngOnInit() {
    this.authService.getProfile().subscribe((user) => {
      this.user = user;
    });
  }

  // FUNCION LOGOUT
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
