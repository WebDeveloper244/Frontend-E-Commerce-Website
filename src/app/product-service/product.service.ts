import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { 
  }
  createProductCart(payLoad:any){
    return this.httpClient.post('http://localhost:8080/ProductManagement/ProductData',payLoad)
  }
}
