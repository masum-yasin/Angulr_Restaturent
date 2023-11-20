import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductPointService } from '../product-point.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[]=[];
  error = '';
  success = '';
  product: Product = {
   prod_id:0,
   prod_name:'',
   prod_img:'',
   prod_price:0,
   prod_desc:'',
   created_at:0
  
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
