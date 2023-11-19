import { Component,OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductPointService } from '../product-point.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 products: Product[]=[];
 error = '';
 success = '';
 product: Product = {
  prod_id:0,
  prod_name:'',
  prod_img:'',
  prod_price:0,
 
 };
 constructor(private productService: ProductPointService){
  
 }
 ngOnInit() {
   this.getProducts()

   
 }
 getProducts(): void {
  this.productService.getAll().subscribe(
    (data:Product[])=> {
      console.log(data);
    this.products = data; 
    }
  )
 }
}
