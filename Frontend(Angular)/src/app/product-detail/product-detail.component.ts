import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:any;

constructor(
  private activatedRoute:ActivatedRoute,
  private productsService:ProductsService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    if(id){
      this.getProduct(id)

    }    
  }
  
  async getProduct(id:string){
    const response:any = await this.productsService.getById(id)
    console.log(response)
    this.product = response
  }


 
  ngOnInit(): void {
  }

}
