// ROUTER
import { Routes } from '@angular/router';

// COMPONENTS
import { BoardsComponent } from '../../pages/boards/boards.component';
import { BoardComponent } from '../../pages/board/board.component';
import { ScrollComponent } from '../../pages/scroll/scroll.component';
import { TableComponent } from '../../pages/table/table.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'boards',
    component: BoardsComponent,
    title: 'Boards',
  },
  {
    path: 'board',
    component: BoardComponent,
    title: 'Board',
  },
  {
    path: 'scroll',
    component: ScrollComponent,
    title: 'Scroll',
  },
  {
    path: 'table',
    component: TableComponent,
    title: 'Table',
  },
];
