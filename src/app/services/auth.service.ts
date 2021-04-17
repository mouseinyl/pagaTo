import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
;
import firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario:any = {}
  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) {
    auth.authState.subscribe((user)=>{
      if(!user){
        return
      }
        this.usuario.nombre =  user.displayName;
        this.usuario.email= user.email;
        this.usuario.uid = user.uid;
        this.usuario.foto= user.photoURL;
      })
   }



  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
     console.log('Sucess', value)
     this.router.navigate(['/board']);
   })
    .catch(error => {
      console.log('Something wnew FirebaseApp().ent wrong: ', error);
    });
  }

  logout() {

    this.auth.signOut().then(() => {
      console.log("aqui")
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider:firebase.auth.AuthProvider) {
    return this.auth.signInWithPopup(provider)
  }
}
