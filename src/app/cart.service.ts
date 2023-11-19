import { Injectable } from '@angular/core';
import { CartProduct } from './CartProduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // constructor() { }
  items:CartProduct[]=[];
  addToCart(product: CartProduct) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
