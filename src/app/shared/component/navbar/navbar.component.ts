import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authService : AuthService,
              private _snackbarService:SnackBarService
              ) { }

  ngOnInit(): void {
  }
 
  onLogin(){
    this._authService.logInToapp();
    this._snackbarService.onOpenSnackbar('you have successfully loged-In');

  }

  onLogOut(){
    this._authService.logOutToapp();
    this._snackbarService.onOpenSnackbar('you have successfully loged-Out');
  }

}
