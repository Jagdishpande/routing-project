import { Injectable } from '@angular/core';
import { Iusers } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userArray:Array<Iusers>=[
    {
      username:'jhon',
      id:1
    },
    {
      username:'may',
      id:2
    },
    {
      username:'july',
      id:3
    }
  ]
  constructor() { }
  getAllusers():Array<Iusers>{
    return this.userArray;
  }

  getUser(Id:number){
    return this.userArray.find(user=>user.id===Id)
  }
}
