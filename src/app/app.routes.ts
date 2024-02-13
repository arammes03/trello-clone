import { Routes } from '@angular/router';

// IMPORT COMPONENTS
import { LoginComponent } from './pages/login/login.component';
import { BoardsComponent } from './pages/boards/boards.component';
import { BoardComponent } from './pages/board/board.component';

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
    path: 'boards',
    component: BoardsComponent,
  },
  {
    path: 'board',
    component: BoardComponent,
  },
];
