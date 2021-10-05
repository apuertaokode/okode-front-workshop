import { Component } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { ProductHttpService } from 'src/app/core/services/http/product-http.service';

@Component({
  selector: 'product-search',
  templateUrl: './product-search.page.html',
  styleUrls: ['./product-search.page.scss']
})
export class ProductSearchPage {

  products?: Product[];
  searchTerm?: string;

  constructor(
    private productHttpService: ProductHttpService // Use this service to get products
  ) { }

}
