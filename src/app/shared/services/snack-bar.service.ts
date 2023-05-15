import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  constructor(private _snackBar: MatSnackBar) {}

  onOpenSnackbar(msg:string){
    this._snackBar.open(msg,'Close',{
      duration:3000,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }
}
