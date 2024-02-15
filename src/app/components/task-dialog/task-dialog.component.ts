import { Component, Inject } from '@angular/core';
import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';

// ICONS
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import { BtnComponent } from '../btn/btn.component';
import { Column, ToDo } from '../../models/todo.model';

interface Data {
  todo: ToDo;
  column: Column;
}

interface OutputData {
  rta: boolean;
}

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [BtnComponent, FontAwesomeModule],
  templateUrl: './task-dialog.component.html',
})
export class TaskDialogComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: ToDo;
  column: Column;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: Data
  ) {
    this.todo = data.todo;
    this.column = data.column;
  }

  closeModal() {
    this.dialogRef.close({
      rta: true,
    });
  }
}
