import { Injectable } from '@angular/core';
import { Iproduct } from '../model/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArray : Array<Iproduct> =[
    {
      pname:"Samsung m1",
      pid:1,
      pstatus:"In-Progress"
    },
    {
      pname:"Apple",
      pid:2,
      pstatus:"Dispatched"
    },
    
    {
      pname:"Macbook",
      pid:3,
      pstatus:"Delivered"
    },
    

  ]
  constructor() { }
  getAllProducts() : Array<Iproduct>{
    return this.productsArray
  }

  getProduct(id:number): Iproduct{
    return this.productsArray.find(prod=>prod.pid===id)!
  }

}
