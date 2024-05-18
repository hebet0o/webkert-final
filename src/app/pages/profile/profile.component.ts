import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { log } from 'console';
import { UserService } from '../../shared/services/user.service';
import { user } from '../../shared/models/user';
import { flight } from '../../shared/models/flight';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private userService: UserService){
  } 
  currentUser = sessionStorage.getItem('currentUser')!;
  user: user | null = null;
  bookedFlights: Array<flight> = []
  
  getUser(){
    this.userService.fetchUser(this.currentUser).subscribe(user => {
      if (user) {
        this.user = user
        let flights = user.bookedTickets as Array<string>;
        flights.map(flightId => {
          this.userService.getFlightsByUser(flightId).subscribe((ticket: flight[]) => {
            ticket.map((currentFlight: flight) => {
              this.bookedFlights.push(currentFlight);
            })
          })
        })
        }
    })
    
    
  }

  delete(){
    this.userService.delete(this.currentUser);
  }

  ngOnInit(): void { 
    this.getUser()
  }
}
