import { Component } from '@angular/core';

// FORMS
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

// ICONS
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// COMPONENTS
import { BtnComponent } from '../../../../components/btn/btn.component';

// SERVICIO
import { AuthService } from '../../../../services/auth.service';

// MODELO
import { RequestStatus } from '../../../../models/request-status.model';

@Component({
  selector: 'app-reset-pass-form',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './reset-pass-form.component.html',
})
export class ResetPassFormComponent {
  form = this.formBuilder.nonNullable.group({
    email: ['', [Validators.email, Validators.required]],
  });
  status: RequestStatus = 'init';
  emailSent = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  sendLink() {
    if (this.form.valid) {
      this.status = 'loading';
      const { email } = this.form.getRawValue();
      this.authService.recovery(email).subscribe({
        next: () => {
          this.status = 'success';
          this.emailSent = true;
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
