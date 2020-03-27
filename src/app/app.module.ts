import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { AboutComponent } from './about/about.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { HomeComponent } from './home/home.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CategoryComponent, ProductComponent, ProductListComponent, SlideComponent, AboutComponent, ProductAddComponent, ProductDeleteComponent, ProductDetailComponent, ProductManagerComponent, HomeComponent, ProductEditComponent, ServicesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
