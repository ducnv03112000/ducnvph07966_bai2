import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import{ProductManagerComponent} from './product-manager/product-manager.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
// import { ProductManagerComponent } from './product-manager/product-manager.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductsComponent } from './admin/products/products.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';


const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'product', component: ProductListComponent},
    { path: 'manager', component: ProductManagerComponent},
    { path: 'product/add', component: ProductAddComponent},
    { path: 'product/:productID', component: ProductDetailComponent},
    { path: 'product/edit/:productID', component: ProductEditComponent},
    { path: 'admin', component: IndexAdminComponent, 
      children: [
       { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'product', component: ProductsComponent},
       
       
      ]
    },
    { path: 'about', component: AboutComponent},
    { path: 'service', component: ServicesComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }