import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: 'app',
    loadChildren: () =>
      import('./modules/layout/layout.routes').then((m) => m.layoutRoutes),
  },
];
