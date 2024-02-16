import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

// COMPONENTS
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BtnComponent, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './register.component.html',
})
export class RegisterComponent {}
