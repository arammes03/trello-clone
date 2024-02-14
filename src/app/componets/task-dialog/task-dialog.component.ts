import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

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
import { BtnComponent } from '../../components/btn/btn.component';

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

  constructor(private dialogRef: DialogRef) {}
  closeModal() {
    this.dialogRef.close();
  }
}
