import { Component, OnInit } from '@angular/core';
import { Product, ProductSearchCategory } from 'src/app/core/models/product.model';
import { ProductHttpService } from 'src/app/core/services/http/product-http.service';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.page.html',
  styleUrls: ['./product-search.page.scss']
})
export class ProductSearchPage implements OnInit {

  products: Product[] = [];
  searchTerm?: string;
  category: ProductSearchCategory = 'technology';
  cartProducts?: Product[];

  constructor(
    private productHttpService: ProductHttpService
  ) { }

  ngOnInit() {
    this.loadProducts();
  }

  onChangeCategory(category: ProductSearchCategory) {
    this.category = category;
    this.loadProducts();
  }

  onAddToCart(product: Product) {
    this.cartProducts ??= [];
    this.cartProducts = [...this.cartProducts, product]
  }

  private loadProducts() {
    const products = this.productHttpService.getStaticProductsByCategory(this.category)
    this.products = products;
  }

}
