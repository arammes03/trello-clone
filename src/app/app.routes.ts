import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
  {
    path: '**',
    component: NotFoundComponent,
  },
];
