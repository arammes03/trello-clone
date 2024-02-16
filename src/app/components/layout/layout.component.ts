import { Component } from '@angular/core';

// ROUTER
import { RouterOutlet } from '@angular/router';

// COMPONENT
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {}
