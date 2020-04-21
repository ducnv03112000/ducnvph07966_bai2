import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   selected: Product;
  products: Product[];
  constructor(
    private productserviceService: ProductserviceService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  showDetail(product){
    this.selected = product;
  }
  getProducts(){
    this.productserviceService.getProducts().subscribe(data => {
      this.products = data;
    })
    // this.products = this.productService.getProducts();
  }
}