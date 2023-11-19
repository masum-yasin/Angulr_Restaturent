import { Component,OnInit } from '@angular/core';
import { CartProduct } from '../CartProduct';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cartproduct-details',
  templateUrl: './cartproduct-details.component.html',
  styleUrls: ['./cartproduct-details.component.css']
})
export class CartproductDetailsComponent implements OnInit  {

  product:CartProduct = {
    id:101,
    name:"Toyota Red",
    details:"this is our new car",
    quantity:10,
    price:500,

}
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  addToCart(product: CartProduct) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  ngOnInit(): void {
      
  }

}
