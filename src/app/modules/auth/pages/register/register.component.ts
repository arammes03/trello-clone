import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

// COMPONENTS
import { BtnComponent } from '../../../../components/btn/btn.component';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    BtnComponent,
    RegisterFormComponent,
    RouterLinkWithHref,
    RouterLinkActive,
  ],
  templateUrl: './register.component.html',
})
export class RegisterComponent {}
