import { Routes } from '@angular/router';

// IMPORT COMPONENTS
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';
import { ScrollComponent } from './pages/scroll/scroll.component';
import { TableComponent } from './pages/table/table.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPassComponent } from './pages/forgot-pass/forgot-pass.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPassComponent,
  },
  {
    path: 'boards',
    component: BoardsComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
  {
    path: 'scroll',
    component: ScrollComponent,
  },
  {
    path: 'table',
    component: TableComponent,
  },
];
