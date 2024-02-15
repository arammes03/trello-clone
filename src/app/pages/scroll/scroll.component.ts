import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// COMPONENTS
import { NavbarComponent } from '../../components/navbar/navbar.component';

// CDK
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent {
  constructor(private http: HttpClient) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
