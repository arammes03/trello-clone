import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faBell,
  faInfoCircle,
  faUpRightFromSquare,
  faSortDown,
  faPlus,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { OverlayModule } from '@angular/cdk/overlay';
// IMPORTS COMPONENTS
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, FontAwesomeModule, OverlayModule],
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
}
