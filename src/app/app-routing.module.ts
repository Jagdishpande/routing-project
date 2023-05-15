import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/component/dashboard/dashboard.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { UserComponent } from "./shared/component/users/user/user.component";
import { ProductComponent } from "./shared/component/products/product/product.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";
import { EditProductComponent } from "./shared/component/products/edit-product/edit-product.component";
import { EdituserComponent } from "./shared/component/users/edituser/edituser.component";

const route :Routes=[
  
    //  {path : 'home', component : DashboardComponent},
    {path : '', component : DashboardComponent},
     {path : 'users', component : UsersComponent,
    
        // children:[
        //     {path :':userId', component : UserComponent},
        //     {path :'userId/edit',component :EdituserComponent}
        // ]
    },


     {path : 'users/:userId', component : UserComponent},
     {path:'users/:userId/edit', component :EdituserComponent},

    {path :'products', component : ProductsComponent,
        children : [
            {path :':prodId', component : ProductComponent },
            {path : ':prodId/edit', component :EditProductComponent}
        ]
    },

    //  {path :'products/:prodId', component : ProductComponent},
    //  {path : 'products/:prodId/edit', component : EditProductComponent},
     {path :'page-not-found', component : PageNotFoundComponent},
     {path : "**", redirectTo : 'page-not-found'}
  ]

@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}