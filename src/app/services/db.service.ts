import { AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  public items: Observable<any[]>;
  constructor(public db : AngularFirestore) {
    this.items =  db.collection('items').valueChanges()
  }

   async addCard(name:string, number:string){

  }


}
