import { Component } from '@angular/core';

// ROUTER
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

// FORM
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

//COMPONENTS
import { BtnComponent } from '../../../../components/btn/btn.component';
import { ResetPassFormComponent } from '../../components/reset-pass-form/reset-pass-form.component';

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  imports: [
    BtnComponent,
    ResetPassFormComponent,
    RouterLinkWithHref,
    RouterLinkActive,
    ReactiveFormsModule,
  ],
  templateUrl: './forgot-pass.component.html',
})
export class ForgotPassComponent {}
