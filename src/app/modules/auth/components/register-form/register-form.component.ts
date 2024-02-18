import { Component } from '@angular/core';

// FORMS
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// ROUTER
import { RouterLinkWithHref, RouterLinkActive, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; // PUNTUAL

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
import { AuthService } from '../../../../services/auth.service'; // PUNTUAL

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
  status: RequestStatus = 'init';
  message: string = '';

  // constructor
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient // PUNTUAL
  ) {}

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

  apiUrl: string = 'https://fake-trello-api.herokuapp.com';

  // METODO REGISTER
  registerService(name: string, email: string, password: string) {
    return this.http.post(`${this.apiUrl}/api/v1/auth/register`, {
      name,
      email,
      password,
    });
  }

  // FUNCION Register
  register() {
    if (this.form.valid) {
      this.status = 'loading';
      const { name, email, password } = this.form.getRawValue();
      this.registerService(name, email, password).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/login']);
        },
        error: (error) => {
          if (error.error.code === 'SQLITE_CONSTRAINT_UNIQUE')
            this.message = 'Este usuario ya esta registrado';
          this.status = 'failed';
        },
      });
    } else this.form.markAllAsTouched();
  }
}
