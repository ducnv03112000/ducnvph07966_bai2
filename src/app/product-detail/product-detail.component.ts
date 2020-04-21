import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {ProductserviceService} from '../productservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

 product: Product;
  constructor(
    private productserviceService: ProductserviceService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.route.params.subscribe(param => {
      this.productserviceService.getProduct(param.productID).subscribe(data => {
        this.product = data;
      })
    });
  }
}