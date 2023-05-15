import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userArray:Array<Iusers>=[
    {
      username:'jhon',
      id:1,
      userRole:"Admin"
    },
    {
      username:'may',
      id:2,
      userRole:"Admin"
    },
    {
      username:'july',
      id:3,
      userRole:"User"
    }
  ]
  constructor() { }
  getAllusers():Array<Iusers>{
    return this.userArray;
  }

  getUser(Id:number){
    return this.userArray.find(user=>user.id===Id)
  }
  updateUser(userObj:Iusers){
    this.userArray.forEach(user=>{
      if(userObj.id===user.id){
        user.username=userObj.username
      }
    })
  }
}
