import { Component } from '@angular/core';

// ROUTER
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
// COMPONENTS
import { RecoveryFormComponent } from '../../components/recovery-form/recovery-form.component';

@Component({
  selector: 'app-recovery',
  standalone: true,
  imports: [RecoveryFormComponent, RouterLinkActive, RouterLinkWithHref],
  templateUrl: './recovery.component.html',
})
export class RecoveryComponent {}
