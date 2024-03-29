import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

// GUARDIAN
import { authGuard } from './guards/auth.guard';
import { redirectGuard } from './guards/redirect.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [redirectGuard],
    loadChildren: () =>
      import('./modules/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'app',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./modules/layout/layout.routes').then((m) => m.layoutRoutes),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
