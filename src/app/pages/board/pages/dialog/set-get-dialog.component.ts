
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  namePlane: '', title:''
}

@Component({
  selector: 'app-dialog',
  templateUrl: './set-get-dialog.component.html',
  styleUrls: ['./set-get-dialog.component.scss'],
})
export class setgetdialogComponent implements OnInit {
  public e = '';
  constructor(
    public dialogRef: MatDialogRef<setgetdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:DialogData
  ){

    // this.data.namePlane = '';
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  save(monto:string,para:string,de:string){

   return {monto:parseFloat(monto),para:para,de:de}
  }

  ngOnInit() {}

}
