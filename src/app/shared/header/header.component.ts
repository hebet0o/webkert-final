import { Component, OnInit, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit{

loggedInUser?: firebase.default.User | null;

constructor(private authService: AuthService){}

ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      console.log(user);
      this.loggedInUser = user;
    }, error => {
      console.log(error);
    })
}

logout(){
  this.authService.logout().then(() => {
    console.log("Logged out successfully!");
  }).catch(error => {
    console.log(error);
   });
}

onToggleSidenav(sidenav: MatSidenav){
  sidenav.toggle();
}

  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
