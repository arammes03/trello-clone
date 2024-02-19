import { Component, inject } from '@angular/core';

// FORMS
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// ROUTER
import {
  RouterLinkWithHref,
  RouterLinkActive,
  Router,
  ActivatedRoute,
} from '@angular/router';
import { HttpClient } from '@angular/common/http'; // PUNTUAL

// ICONS
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { BtnComponent } from '../../../../components/btn/btn.component';

// MODELS
import { RequestStatus } from '../../../../models/request-status.model';

// SERVICE
import { AuthService } from '../../../../services/auth.service'; // PUNTUAL

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    BtnComponent,
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
  status: RequestStatus = 'init';

  // constructor
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.route.queryParamMap.subscribe((params) => {
      const email = params.get('email');
      if (email) this.form.controls.email.setValue(email);
    });
  }

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
      this.authService.login(email, password).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['app/boards']);
        },
        error: () => {
          this.status = 'failed';
        },
      });
    } else this.form.markAllAsTouched();
  }
}
