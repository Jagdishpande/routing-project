import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/model/users';
import { SnackBarService } from 'src/app/shared/services/snack-bar.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  userId!:number;
  userObj!:Iusers;
  canEditUser!:string;
  constructor(
    private _usersService:UsersService,
    private _routes:ActivatedRoute,
    private _router:Router,
    private _snackbarService:SnackBarService

    ) { }

  ngOnInit(): void {
    this._routes.params
            .subscribe((userparam:Params)=>{
              this.userId=+userparam['userId']
              this.userObj=this._usersService.getUser(this.userId)!
              
            })
     this._routes.queryParams 
              .subscribe((qp:Params)=>{
                console.log(qp)
                this.canEditUser=qp['canEdit']
              })
  }

  onupdateUser(username:HTMLInputElement){
    let obj:Iusers={
      username:username.value,
      id:this.userId,
      userRole:this.userObj.userRole
    }
    this._usersService.updateUser(obj)
    this._router.navigate(['/users',this.userId])
    
    this._snackbarService.onOpenSnackbar(`The username changed to ${this.userObj.username}`)
  }
  
}
