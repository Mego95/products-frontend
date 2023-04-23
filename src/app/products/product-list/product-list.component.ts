import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product, ProductsAPIList } from '../products.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  productList: Product[] = [];
  subscription: Subscription | undefined;

  ngOnInit(): void {
    console.log('started findAll api call')
    this.subscription = this.productsService.findAll().subscribe({
      next: (apiData: ProductsAPIList) => {
        const {status, data} = apiData;
        if (status) {
          this.productList = data;
        }
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('finished api call');
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe;
  }
}
