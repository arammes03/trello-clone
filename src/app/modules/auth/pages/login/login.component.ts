import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';
import { BtnComponent } from '../../../../components/btn/btn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BtnComponent, RouterLinkWithHref, RouterLinkActive],
  templateUrl: './login.component.html',
})
export class LoginComponent {}
