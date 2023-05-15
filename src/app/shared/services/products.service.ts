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
      pstatus:"In-Progress",
      canReturn:1
    },
    {
      pname:"Apple",
      pid:2,
      pstatus:"Dispatched",
      canReturn:1
    },
    
    {
      pname:"Macbook",
      pid:3,
      pstatus:"Delivered",
      canReturn:0
    },
    

  ]
  constructor() { }
  getAllProducts() : Array<Iproduct>{
    return this.productsArray
  }

  getProduct(id:number): Iproduct{
    return this.productsArray.find(prod=>prod.pid===id)!
  }

  updateProd(prodObj : Iproduct){
    this.productsArray.forEach(prod=>{
      if(prodObj.pid === prod.pid){
        prod.pname = prodObj.pname;
        prod.pstatus= prodObj.pstatus;
      }
    })
  }
}


