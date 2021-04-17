import { DbService } from './../../../../services/db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public db: DbService) {

   }

  ngOnInit(): void {
  }

}
