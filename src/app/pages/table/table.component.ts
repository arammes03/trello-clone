import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';

// COMPONENTS
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { BtnComponent } from '../../components/btn/btn.component';
import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';

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
  constructor(private http: HttpClient) {}

  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'cover', 'actions'];
  total = 0;
  input = new FormControl('', { nonNullable: true });

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.dataSource.init(data);
        this.total = this.dataSource.getTotal();
      });

    this.input.valueChanges.subscribe((value) => {
      this.dataSource.find(value);
    });
  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }
}
