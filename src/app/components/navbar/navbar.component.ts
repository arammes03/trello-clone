import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

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
export class NavbarComponent {
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
}
