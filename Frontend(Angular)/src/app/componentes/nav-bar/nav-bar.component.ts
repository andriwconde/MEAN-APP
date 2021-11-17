import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Category } from 'src/app/interface/category.interface';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Output() categoryFilter = new EventEmitter<Category>();
  categories:any
  constructor(
    private productsService:ProductsService) {
    this.getCategories()
   }


  async getCategories(){
    const response:any = await this.productsService.getAllCategories()
    console.log(response)
    this.categories = response
  }
/* 
  async get(){
    const response:any = await this.productsService.getAllCategories()
    console.log(response)
    this.categories = response
  }

  async getProductsByCategory(Category:any){
    this.categoryFilter.emit()
     const products:any = await this.productsService.getAllProductsByCategory(Category)
    this.products = products
    console.log(products)
   } */
   onClick(categoria: Category): void{
    this.categoryFilter.emit(categoria)
  }


  ngOnInit(): void {
  }

}
