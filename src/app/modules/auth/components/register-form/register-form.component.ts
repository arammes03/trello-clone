import { Component } from '@angular/core';

// FORMS
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// ROUTER
import { RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';

// ICONS
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPen,
  faEye,
  faEyeSlash,
  faSignature,
} from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { BtnComponent } from '../../../../components/btn/btn.component';

// MODELS
import { RequestStatus } from '../../../../models/request-status.model';

// UTILS
import { CustomValidators } from './../../../../utils/validators';

// SERVICE
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    BtnComponent,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterLinkWithHref,
    RouterLinkActive,
  ],
  templateUrl: './register-form.component.html',
})
export class RegisterFormComponent {
  // ICONOS Y VARIABLE
  faPen = faPen;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faSignature = faSignature;

  showPassword = false;
  showRegister = false;
  status: RequestStatus = 'init';
  statusUser: RequestStatus = 'init';
  message: string = '';

  // constructor
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  formUser = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });

  // FORM
  form = this.formBuilder.nonNullable.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confPassword: ['', [Validators.required]],
    },
    {
      validators: [CustomValidators.MatchValidator('password', 'confPassword')],
    }
  );

  // FUNCION Register
  register() {
    if (this.form.valid) {
      this.statusUser = 'loading';
      const { name, email, password } = this.form.getRawValue();
      this.authService.registerAndLogin(name, email, password).subscribe({
        next: () => {
          this.statusUser = 'success';
          this.router.navigate(['/app/boards']);
        },
        error: () => {
          this.statusUser = 'failed';
        },
      });
    } else this.form.markAllAsTouched();
  }

  // FUNCION VALIDAR EMAL
  validateUser() {
    if (this.formUser.valid) {
      this.statusUser = 'loading';
      const { email } = this.formUser.getRawValue();
      this.authService.isAvailable(email).subscribe({
        next: (rta) => {
          this.statusUser = 'success';
          if (rta.isAvailable) {
            this.showRegister = true;
            this.form.controls.email.setValue(email);
          } else
            this.router.navigate(['/login'], {
              queryParams: { email },
            });
        },
        error: () => {
          this.status = 'failed';
        },
      });
    } else this.formUser.markAllAsTouched();
  }
}
