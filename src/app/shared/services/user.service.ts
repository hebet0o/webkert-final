import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { user } from '../models/user';
import { arrayUnion, limit } from '@angular/fire/firestore';
import { flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = "users";

  constructor(private afs: AngularFirestore) { }

  create(User: user){
    return this.afs.collection<user>(this.collectionName).doc(User.id).set(User);
  }
  

  update(userId: string, ticketId: string){
    return this.afs.collection<user>(this.collectionName).doc(userId).update({
      bookedTickets: arrayUnion(ticketId)
    })
  }

  fetchUser(userId: string){
    return this.afs.collection<user>(this.collectionName).doc(userId).valueChanges();
  }

  getFlightsByUser(flightId: string){
    return this.afs.collection<flight>('flights', ref => ref.where('id', '==',flightId),).valueChanges();
  }

  delete(currentuser: string){
    return this.afs.collection<user>(this.collectionName).doc(currentuser).delete();
  }
}
