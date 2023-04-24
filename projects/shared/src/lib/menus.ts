import { MenuItem } from "./interfaces";

export const usersMenu: MenuItem[] = [
    {text: 'List all users', link: 'user/list'},
    {text: 'Insert a user', link: 'user/insert'},
    {text: 'Delete a user', link: 'not-implemented-yet'},
    {text: 'Update a user', link: 'not-implemented-yet'},
  ];
  export const productsMenu: MenuItem[] = [
    {text: 'List all products', link: 'products/list'},
    {text: 'Insert a product', link: 'products/insert'},
    {text: 'Delete a product', link: 'not-implemented-yet'},
    {text: 'Update a product', link: 'not-implemented-yet'},
  ];