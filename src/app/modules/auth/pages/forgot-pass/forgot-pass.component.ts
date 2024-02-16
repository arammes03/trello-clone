import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

//COMPONENTS
import { BtnComponent } from '../../../../components/btn/btn.component';

@Component({
  selector: 'app-forgot-pass',
  standalone: true,
  imports: [BtnComponent, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './forgot-pass.component.html',
})
export class ForgotPassComponent {}
