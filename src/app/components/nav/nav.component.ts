import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private auth: AuthService , private router:Router) { }

  ngOnInit(): void {
  }
  out(){
    this.auth.logout();
  }

  go(route: string){
    this.router.navigate([route])
  }
}
