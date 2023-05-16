import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isUserLoggedIn: boolean = false;
  constructor(private _router : Router) { }

  isAuthenticated():Promise<boolean>{
    return new Promise((resolve)=>{
      // if(localStorage.getItem('token')){
      //   this.isUserLoggedIn = true;
      // }else{
      //   this.isUserLoggedIn = false;
      // }
      localStorage.getItem('token')? this.isUserLoggedIn=true : this.isUserLoggedIn = false;
      
      // this.isUserLoggedIn = Boolean(localStorage.getItem('token')) ?? false
      resolve(this.isUserLoggedIn)
    })
  }

  logInToapp(){
    this.isUserLoggedIn=true;

    localStorage.setItem('userRole','admin');
    localStorage.setItem('token','JWT TOKEN')
    this._router.navigate(['/home'])

  }

  logOutToapp(){
    this.isUserLoggedIn=false;
    this._router.navigate(['/'])
    localStorage.clear()
  }
}
