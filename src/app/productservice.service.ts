import { Injectable } from '@angular/core';
import { data } from './MockData';
import { Product } from './product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  // products = data;
  api = 'https://5e7c5423a917d700166831bc.mockapi.io/product';
   constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.api);
    // return this.products;
  }
  getProduct(id): Observable<Product>{
    console.log(id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  addProduct(product): Observable<Product>{
    return this.http.post<Product>(`${this.api}`, product);
    // let newObj = { id: 6, ...product };
    // this.products.push(newObj);
  }
  updateProduct(product): Observable<Product>{
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }

}