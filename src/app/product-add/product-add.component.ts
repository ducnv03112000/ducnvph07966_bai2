import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductserviceService } from '../productservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Product = new Product();
  constructor(
    private productserviceService: ProductserviceService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  addProduct(){
    this.productserviceService.addProduct(this.product).subscribe(data => this.router.navigateByUrl('/manager'));
  }
}