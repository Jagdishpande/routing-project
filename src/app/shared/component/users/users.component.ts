import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../model/users';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersData!:Array<Iusers>
  constructor(private _userservice:UsersService) { }

  ngOnInit(): void {
    this.usersData=this._userservice.getAllusers()
  }

}
