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
pictures:any =[]
mainPicture = ""
// principal_picture:any 
constructor(
  private activatedRoute:ActivatedRoute,
  private productsService:ProductsService
  ) {
    const id = this.activatedRoute.snapshot.paramMap.get("id")
    const idp = this.activatedRoute.snapshot.paramMap.get("idp")
    if(id){
      this.getProduct(id)

    }
    if(idp){
      this.getPicture(idp)

    }
    
  }
  
  async getProduct(id:string){
    const response:any = await this.productsService.getById(id)
    console.log(response)
    this.product = response
    this.pictures = response.pictures
    this.mainPicture = this.pictures[0].url
    // this.pictures[0].url = this.principal_picture
  }
  async getPicture(idp:string){
    this.mainPicture = this.pictures.find((picture:any) => picture.id === idp).url
  }

 
  ngOnInit(): void {
  }

}
