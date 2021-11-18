import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interface/product.interface';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
  products:Product []=[]

  constructor( 
    private productsService:ProductsService,
    private activatedRoute:ActivatedRoute,

    ) { 
      const categoryId = this.activatedRoute.snapshot.paramMap.get("categoryId")
      if(categoryId){
        this.products = []
        this.getProductsByCategory(categoryId)
      }else{
        this.getProducts()
      }
  }
   async getProductsByCategory(category:any){
    this.products = []
    const products:any = await this.productsService.getAllProducts()
    this.products = products.filter((product:any) => product.category._id == category)
   }

  async getProducts(){
    const response:any = await this.productsService.getAllProducts()
    this.products = response
   }
  
  ngOnInit(): void {
  }

}
