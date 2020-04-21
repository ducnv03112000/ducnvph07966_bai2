import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: Product[];
  constructor(
    private productserviceService: ProductserviceService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.productserviceService.getProducts().subscribe(data => {
      this.products = data;
    })
    // this.products = this.productService.getProducts();
  }
  
   
}