import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { flight } from '../models/flight';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private afs: AngularFirestore) {}

  getFlightsByParams() {
    return this.afs.collection('flights');
  }

  

}
