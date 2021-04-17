import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import IUser from '../types/IUser';
import { FirebaseApp } from '@angular/fire';
import Firebase from "firebase/app";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public usuario: IUser | null = null;

  constructor(
    private firebase: FirebaseApp,
    private firestore: AngularFirestore,
    public auth: AngularFireAuth,
    private router: Router
  ) {

    setTimeout(() => {
      firebase.auth().onAuthStateChanged((res)=>{
        console.log(res);
    })
    }, 400);


  }

  public isLogged() {
    return this.firebase.auth().currentUser !== null;
  }

  googleLogin() {
   var provider =  new Firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((credentials) => {

        this.firestore.collection("users").ref
          .where("uuid", "==", credentials.user?.uid)
          .get()
          .then(async (res) => {
            if (res.empty) {
              await this.firestore.collection("users").add({
                balance: 0,
                email: credentials.user?.email,
                name: credentials.user?.displayName,
                photo: credentials.user?.photoURL,
                uuid: credentials.user?.uid,
                cards:[]
              } as IUser)
              this.fetchUser();
            } else {
              var dbUser = res.docs[0].data();
              this.usuario = dbUser as IUser;
            }
            console.log('Sucess', credentials)
            this.router.navigate(['/board']);
          });
      })
      .catch(error => {
        console.log('Something wnew FirebaseApp().ent wrong: ', error);
      });
  }

  async fetchUser() {
    var res = await this.firestore.collection("users").ref
      .where("uuid", "==", this.firebase.auth().currentUser?.uid)
      .get();
      console.log(res);
    if (!res.empty) {
      var dbUser = res.docs[0].data();
      this.usuario = dbUser as IUser;
    }
  }



  logout() {

    this.auth.signOut().then(() => {
      this.usuario = null
      console.log("aqui")
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider: Firebase.auth.GoogleAuthProvider) {
    return this.auth.signInWithPopup(provider)
  }
}
