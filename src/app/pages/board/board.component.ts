import { Component } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

// IMPORT COMPONENTS
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule],
  templateUrl: './board.component.html',
})
export class BoardComponent {
  // Lista toDos
  todos: ToDo[] = [
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
  ];

  doing: ToDo[] = [
    {
      id: '3',
      title: 'Estar mamadisimo',
    },
    {
      id: '5',
      title: 'Tener 100kg en BP',
    },
  ];

  done: ToDo[] = [
    {
      id: '6',
      title: 'Tirar 250kg en DL',
    },
  ];

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
}
