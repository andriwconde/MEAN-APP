import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  products:any =[]
  constructor(
    private productsService:ProductsService) { 
    this.getProducts()

  }
   
  async getProducts(){
    const response:any = await this.productsService.getAllProducts()
    console.log(response)

    this.products = response
    console.log(this.products)
  }
  
  ngOnInit(): void {
  }

}
