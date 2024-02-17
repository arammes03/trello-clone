import { Component } from '@angular/core';

// ROUTER
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

// COMPONENTS
import { BtnComponent } from '../../../../components/btn/btn.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    BtnComponent,
    LoginFormComponent,
    RouterLinkWithHref,
    RouterLinkActive,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
