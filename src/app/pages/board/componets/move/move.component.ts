import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.scss']
})
export class MoveComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  go(){
    this.router.navigate(["/board/movimientos"])
  }
}
