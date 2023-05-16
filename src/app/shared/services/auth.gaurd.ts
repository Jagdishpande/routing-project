import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { SnackBarService } from "./snack-bar.service";






@Injectable({
    providedIn : 'root'
})
export class AuthGaurd implements CanActivate , CanActivateChild{
constructor(private _router : Router,
    private _authService : AuthService,
    private _snackbarService : SnackBarService){
    
}
   

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean>{
   return this._authService.isAuthenticated()
            .then((logInStatus:boolean)=>{
                if(logInStatus){
                    return true
                }else{
                    this._snackbarService.onOpenSnackbar('plz Login to Access')
                    this._router.navigate(['/'])
                    return false
                }
            })
     
}

canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> |  Promise<boolean > {
    return this.canActivate(childRoute,state)
}
}


