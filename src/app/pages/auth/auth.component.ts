import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }


  log(){
    this.auth.googleLogin()
  }
  out(){
    this.auth.logout()
  }
}
