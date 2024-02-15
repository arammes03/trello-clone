import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
import { HttpClient, HttpClientModule } from '@angular/common/http';

// COMPONENTS
import { User } from '../../models/user.model';
import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-member-modal',
  standalone: true,
  imports: [FontAwesomeModule, ScrollingModule, HttpClientModule, BtnComponent],
  templateUrl: './member-modal.component.html',
})
export class MemberModalComponent {
  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  closeModal() {
    this.dialogRef.close({
      rta: true,
    });
  }

  constructor(private dialogRef: DialogRef, private http: HttpClient) {}

  users: User[] = [];

  ngOnInit() {
    this.http
      .get<User[]>('https://api.escuelajs.co/api/v1/users')
      .subscribe((data) => {
        this.users = data;
      });
  }
}
