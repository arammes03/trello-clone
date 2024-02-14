import { Component } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Dialog } from '@angular/cdk/dialog';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

// IMPORT COMPONENTS
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TaskDialogComponent } from '../../componets/task-dialog/task-dialog.component';
import { ToDo, Column } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NavbarComponent,
    TaskDialogComponent,
    DragDropModule,
    CdkOverlayOrigin,
    FontAwesomeModule,
  ],
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
  styleUrl: './board.scss',
})
export class BoardComponent {
  constructor(private dialog: Dialog) {}
  // ICONS
  faElipsis = faEllipsis;
  columns: Column[] = [
    {
      title: 'Para hacer',
      todos: [
        {
          id: '1',
          title: 'Tirar 200kg en BP',
        },
        {
          id: '2',
          title: 'Pesar 100kg',
        },
        {
          id: '4',
          title: 'Tener 300kg en DL',
        },
      ],
    },
    {
      title: 'Haciendo',
      todos: [
        {
          id: '3',
          title: 'Estar mamadisimo',
        },
        {
          id: '5',
          title: 'Tener 100kg en BP',
        },
      ],
    },
    {
      title: 'Finalizado',
      todos: [
        {
          id: '6',
          title: 'Tirar 250kg en DL',
        },
      ],
    },
  ];

  todos: ToDo[] = [];
  doing: ToDo[] = [];
  done: ToDo[] = [];

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer === event.container)
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    else
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
  }

  addColumn() {
    this.columns.push({
      title: 'Nueva línea',
      todos: [],
    });
  }

  dropHorizontal(event: CdkDragDrop<Column[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  openDialog() {
    this.dialog.open(TaskDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
    });
  }
}
