import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct, Tpstatus } from 'src/app/shared/model/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  prodId!:number;
  prodObj!:Iproduct;
  canEditProd!:number;
  constructor(
              private _router : Router,
              private _route : ActivatedRoute,
               private _productsService:ProductsService,
               private _snackbarService:SnackBarService
 
              ) { }

  ngOnInit(): void {
    this._route.params
        .subscribe((params:Params)=>{
          this.prodId=+params['prodId']
          this.prodObj=this._productsService.getProduct(this.prodId)
        })

        this._route.queryParams
                  .subscribe((qp:Params)=>{
                    this.canEditProd=+qp['canEdit']
                  })
  }
  updateProd(pname:HTMLInputElement,pstatus:HTMLSelectElement){
    let obj: Iproduct ={
      pname :pname.value,
      pstatus:pstatus.value as Tpstatus,
      pid: this.prodId,
      canReturn:this.prodObj.canReturn
    }
    this._productsService.updateProd(obj);
    this._router.navigate(['/products',this.prodId])
    this._snackbarService.onOpenSnackbar(`The Product ${this.prodObj.pname} updated & its status is ${this.prodObj.pstatus}`)
  }

}
