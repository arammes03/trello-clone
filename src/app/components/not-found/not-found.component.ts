import { Component } from '@angular/core';

// ROUTER
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {}
