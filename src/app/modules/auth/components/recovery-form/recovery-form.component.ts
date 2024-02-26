import { Component } from '@angular/core';

// ROUTER
import { ActivatedRoute, Router } from '@angular/router';

// FORM
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

// ICONS
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { BtnComponent } from '../../../../components/btn/btn.component';

// UTILS
import { CustomValidators } from '../../../../utils/validators';

// MODELS
import { RequestStatus } from '../../../../models/request-status.model';

// SERVICIO
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-recovery-form',
  standalone: true,
  imports: [BtnComponent, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './recovery-form.component.html',
})
export class RecoveryFormComponent {
  form = this.formBuilder.nonNullable.group(
    {
      newPassword: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        CustomValidators.MatchValidator('newPassword', 'confirmPassword'),
      ],
    }
  );
  status: RequestStatus = 'init';
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  showPassword = false;
  token = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParamMap.subscribe((params) => {
      const token = params.get('token');
      if (token) this.token = token;
      else this.router.navigate(['/login']);
    });
  }

  recovery() {
    if (this.form.valid) {
      const { newPassword } = this.form.getRawValue();
      this.status = 'loading';
      this.authService.resetPass(this.token, newPassword).subscribe({
        next: () => {
          this.status = 'success';
          this.router.navigate(['/login']);
        },
        error: () => {
          this.status = 'failed';
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
