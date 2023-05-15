import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { UsersComponent } from './shared/component/users/users.component';
import { ProductsComponent } from './shared/component/products/products.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './shared/component/users/user/user.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { EditProductComponent } from './shared/component/products/edit-product/edit-product.component';
import { EdituserComponent } from './shared/component/users/edituser/edituser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarClickDirective } from './shared/directive/navbar-click.directive';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    ProductsComponent,
    NavbarComponent,
    UserComponent,
    PageNotFoundComponent,
    EditProductComponent,
    EdituserComponent,
    NavbarClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
