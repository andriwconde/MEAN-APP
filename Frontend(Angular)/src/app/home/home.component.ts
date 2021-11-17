import { Component, OnInit } from '@angular/core';
import { Category } from '../interface/category.interface';
import { Product } from '../interface/product.interface';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  products:any

  constructor( 
    private productsService:ProductsService,

    ) { 
      this.getProducts()
  }
   async getProductsByCategory(category:Category){
    const products:any = await this.productsService.getAllProducts()
    
    this.products = products.filter((product:any) => product.category._id == category)

   }

  async getProducts(){
    const response:any = await this.productsService.getAllProducts()
    console.log(response)
    this.products = response
   }
  
  ngOnInit(): void {
  }

}
