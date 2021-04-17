
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  accion:string,
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class CreditDialogComponent implements OnInit {
  public e = '';
  constructor(
    public dialogRef: MatDialogRef<CreditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData
  ){}
  onNoClick(): void {
    this.dialogRef.close();
  }

  save(monto:string,para:string,de:string){

    return {monto:parseFloat(monto),para:para,de:de}
   }


  ngOnInit() {}

}
