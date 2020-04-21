import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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