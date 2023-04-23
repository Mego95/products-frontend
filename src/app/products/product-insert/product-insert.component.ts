import { Component } from '@angular/core';
import { Product } from '../products.interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-insert',
  templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private productsService: ProductsService) {
    this.form = this.fb.group({
      product: ['', [Validators.required, Validators.minLength(3)]],
      cost: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      const product = this.form.value as Product;
      this.productsService.insert(product).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
