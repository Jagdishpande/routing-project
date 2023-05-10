import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./shared/component/dashboard/dashboard.component";
import { ProductsComponent } from "./shared/component/products/products.component";
import { UsersComponent } from "./shared/component/users/users.component";
import { UserComponent } from "./shared/component/users/user/user.component";
import { ProductComponent } from "./shared/component/products/product/product.component";
import { PageNotFoundComponent } from "./shared/component/page-not-found/page-not-found.component";

const route :Routes=[
  
    //  {path : 'home', component : DashboardComponent},
    {path : '', component : DashboardComponent},
     {path : 'users', component : UsersComponent},
     {path : 'users/:userId', component : UserComponent},
    //  {path : 'user/2', component : UserComponent},
    //  {path : 'user/3', component : UserComponent},
     {path :'products', component : ProductsComponent},
     {path :'products/:prodId', component : ProductComponent},
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