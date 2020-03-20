import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {data} from '../MockData';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

   ngOnInit(): void {

  }
  products = data;
  selected: Product;
   showDetail(product){
this.selected = product
   }
  
    removeItem(id){
      this.products = this.products.filter(x => x.id !== id);
    }
  
}
