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
      return this.http.get("http://localhost:3000/products").toPromise()
    }
    
    getById(id:string){
      return this.http.get("https://api.mercadolibre.com/items/"+id).toPromise()
    }

    
}
