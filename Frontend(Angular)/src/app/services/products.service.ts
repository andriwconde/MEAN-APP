import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http:HttpClient
  ) { }
    getAllProducts(){
      return this.http.get("http://localhost:3010/products").toPromise()
    }
     getAllProductsByCategory(query:string){
        return this.http.get("http://localhost:3010/products/productsByCategories/" + query).toPromise()
    }
    getById(id:string){
      return this.http.get("http://localhost:3010/products/"+id).toPromise()
    }
    getAllCategories(){
      return this.http.get("http://localhost:3010/categories").toPromise()
    }
}
