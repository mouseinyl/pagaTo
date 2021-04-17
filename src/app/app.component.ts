import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'paga';
  public isLoading = true;
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    console.log("pase--->" + this.auth.isLogged);
    setTimeout(() => {
      this.isLoading = false;
      if (this.auth.isLogged() && this.auth.usuario == null) {
        this.isLoading = true;
        this.auth.fetchUser().then(() => {
          this.isLoading = false;
          this.router.navigate(['/board']);
        })
      }
    }, 300);

  }

}
