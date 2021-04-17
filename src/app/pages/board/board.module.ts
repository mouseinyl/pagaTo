import { DialogComponent } from './componets/dialog/dialog/dialog.component';
import { CreditDialogComponent } from './componets/credid/dialog/dialog.component';

import { NavComponent } from './../../components/nav/nav.component';
import { MaterialModule } from './../../material/material.module';
import { BoardRoutingModule } from './board-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './componets/card/card.component';
import { CredidComponent } from './componets/credid/credid.component';
import { MoveComponent } from './componets/move/move.component';
import { IndexComponent } from './pages/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovimientoComponent } from './pages/movimiento/movimiento.component';




@NgModule({
  declarations: [
    CardComponent,
    CredidComponent,
    MoveComponent,
    IndexComponent,
    NavComponent,
    DialogComponent,
    CreditDialogComponent,
    MovimientoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BoardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BoardModule { }
