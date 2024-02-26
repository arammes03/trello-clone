// ROUTER
import { Routes } from '@angular/router';

// COMPONENTS
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register',
  },
  {
    path: 'forgot-password',
    component: ForgotPassComponent,
    title: 'Forgot Password',
  },
  {
    path: 'recovery',
    component: RecoveryComponent,
    title: 'Recovery',
  },
];
