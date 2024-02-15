import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CdkAccordionModule } from '@angular/cdk/accordion';

// IMPORTS COMPONENTS
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { MemberModalComponent } from '../../components/member-modal/member-modal.component';

// IMPORT ICONS
import {
  faBox,
  faWaveSquare,
  faClock,
  faChevronDown,
  faChevronUp,
  faHeart,
  faBorderAll,
  faUsers,
  faGear,
  faChevronRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [
    NgClass,
    NavbarComponent,
    FontAwesomeModule,
    CdkAccordionModule,
    MemberModalComponent,
  ],
  templateUrl: './boards.component.html',
})
export class BoardsComponent {
  constructor(private dialog: Dialog) {}

  // ICONS
  faBox = faBox;
  faWaveSquare = faWaveSquare;
  faClock = faClock;
  faTrello = faTrello;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGear;
  faChevronRight = faChevronRight;
  faPlus = faPlus;

  items = [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Sub Item 1.1',
        },
        {
          label: 'Sub Item 1.2',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Sub Item 2.1',
        },
      ],
    },
    {
      label: 'Item 3',
      items: [
        {
          label: 'Sub Item 3.1',
        },
        {
          label: 'Sub Item 3.2',
        },
        {
          label: 'Sub Item 3.3',
        },
      ],
    },
  ];

  openModalMembers() {
    this.dialog.open(MemberModalComponent, {
      minWidth: '50%',
      maxWidth: '60%',
    });
  }
}
