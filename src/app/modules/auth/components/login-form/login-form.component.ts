import { Component } from '@angular/core';

// FORMS
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// ROUTER
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

// ICONS
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { BtnComponent } from '../../../../components/btn/btn.component';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    BtnComponent,
    LoginFormComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterLinkWithHref,
    RouterLinkActive,
  ],
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  // ICONOS Y VARIABLE
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  showPassword = false;
  status: string = 'init';

  // constructor
  constructor(private formBuilder: FormBuilder) {}

  // FORM
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  // FUNCION LOGIN
  login() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email, password } = this.form.getRawValue();
    } else this.form.markAllAsTouched();
  }
}
