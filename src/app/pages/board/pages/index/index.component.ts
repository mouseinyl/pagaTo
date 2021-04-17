import { setgetdialogComponent } from './../dialog/set-get-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DbService } from './../../../../services/db.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public db: DbService, private dialog:MatDialog) {}

  ngOnInit(): void {}
  open(type:string){
      const dialogRef = this.dialog.open(setgetdialogComponent,{width : '500px' ,height:'350px', data:{ namePlane: '', title:type}})
      dialogRef.afterClosed().subscribe((resp) => {console.log(resp)});

  }


}
