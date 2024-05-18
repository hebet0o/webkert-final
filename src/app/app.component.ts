import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  

  constructor(private authService: AuthService){}

  loggedInUser?: firebase.default.User | null;

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
    })
  }

  logout(){
    this.authService.logout().then(() => {
      console.log("Logged out successfully!");
      sessionStorage.clear();
    }).catch(error => {
      console.log(error);
    });
  }

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }
}
