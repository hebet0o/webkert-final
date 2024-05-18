import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { 
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout(){
    return this.auth.signOut();
  }
  isUserLoggedIn(){
    return this.auth.user;
  }



}
