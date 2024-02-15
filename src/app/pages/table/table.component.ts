import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CdkTableModule } from '@angular/cdk/table';

// COMPONENTS
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, CdkTableModule],
  templateUrl: './table.component.html',
})
export class TableComponent {
  constructor(private http: HttpClient) {}

  products: Product[] = [];
  columns: string[] = ['id', 'title', 'price', 'cover'];

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
