import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private productserviceService: ProductserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProduct();
  }
  getProduct(){
    this.route.params.subscribe(param => {
      this.productserviceService.getProduct(param.productID).subscribe(data => {
        this.product = data;
      })
    })
  }

  updateProduct(){
   this.productserviceService.updateProduct(this.product).subscribe(data => {
      this.router.navigateByUrl('/product');
   })
  }
}