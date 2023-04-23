import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ProductsService } from './products.service';

import { ProductInsertComponent } from './product-insert/product-insert.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {path: 'list', component: ProductListComponent},
  {path: 'insert', component: ProductInsertComponent},
];

@NgModule({
  declarations: [
    ProductInsertComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],
  providers: [ProductsService]
})
export class ProductsModule { }
