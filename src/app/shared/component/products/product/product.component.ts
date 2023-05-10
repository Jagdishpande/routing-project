import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private _route : ActivatedRoute,
    private _productService:ProductsService
    ) { }
  prodId!:number;
  prodObj!:Iproduct;
  ngOnInit(): void {
    this._route.params
      .subscribe((params:Params)=>{
        this.prodId=+params['prodId']
        this.prodObj=this._productService.getProduct(this.prodId)
      })
  }

}
