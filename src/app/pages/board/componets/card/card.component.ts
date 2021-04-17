import { DialogComponent } from './../dialog/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private dialog:MatDialog ) { }

  ngOnInit(): void {
  }
  open(){
    const dialogRef = this.dialog.open(DialogComponent,{width : '500px' ,height:'250px', data:{ namePlane: '', title:'Renombre el plan'}})
    dialogRef.afterClosed().subscribe((resp) => {console.log(resp)});

  }
}
