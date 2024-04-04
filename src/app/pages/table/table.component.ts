import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';

// COMPONENTS
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BtnComponent } from '../../components/btn/btn.component';

// SERVICES
import { UsersService } from '../../services/users.service';

//DATA-SOURCE
import { DataSourceUser } from './data-source';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NavbarComponent,
    NgClass,
    CdkTableModule,
    BtnComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './table.component.html',
})
export class TableComponent {
  constructor(private usersService: UsersService) {}

  dataSource = new DataSourceUser();
  columns: string[] = ['avatar', 'name', 'email'];

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.dataSource.init(users);
    });
  }
}
