import { AuthService } from './../../../../services/auth.service';
import { CreditDialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import IUser from 'src/app/types/IUser';

@Component({
  selector: 'app-credid',
  templateUrl: './credid.component.html',
  styleUrls: ['./credid.component.scss']
})
export class CredidComponent implements OnInit {
  constructor(private dialog: MatDialog, public auth: AuthService) {
  }

  ngOnInit(): void {
    console.log(this.auth.usuario);
  }

  open() {
    const dialogRef = this.dialog.open(CreditDialogComponent, { width: '500px', height: '650px', data: { namePlane: '', title: 'Renombre el plan' } })
    dialogRef.afterClosed().subscribe((resp) => { console.log(resp) });

  }

}
