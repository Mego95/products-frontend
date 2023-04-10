import { Component } from '@angular/core';
import { MenuItem } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'products-frontend';

  usersMenu: MenuItem[] = [
    {text: 'List all users', link: 'user/list'},
    {text: 'Insert a user', link: 'not-implemented-yet'},
    {text: 'Delete a user', link: 'not-implemented-yet'},
    {text: 'Update a user', link: 'not-implemented-yet'},
  ];
  productsMenu: MenuItem[] = [
    {text: 'List all products', link: 'not-implemented-yet'},
    {text: 'Insert a product', link: 'not-implemented-yet'},
    {text: 'Delete a product', link: 'not-implemented-yet'},
    {text: 'Update a product', link: 'not-implemented-yet'},
  ];
}
