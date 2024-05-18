import { Component, Input } from '@angular/core';
import { flight } from '../../models/flight';
import { MatCard, MatCardActions } from '@angular/material/card';
import { PricePipePipe } from '../../../pipes/price-pipe.pipe';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [
    MatCardActions,
    MatCard,
    PricePipePipe,
    CommonModule,
  ],
  templateUrl: './flight-card.component.html',
  styleUrl: './flight-card.component.css'
})
export class FlightCardComponent {
  constructor(private userService: UserService){}
  @Input() flight: flight | null = null;
  currentUser = sessionStorage.getItem('currentUser')!
  bookResponse = '';
  currentUrl = window.location.href;
  cutUrl = this.currentUrl.split("/")[3];

  async book(){
    if (this.flight) {
      await this.userService.update(this.currentUser, this.flight.id);
      this.bookResponse = 'Booked'
    }
  }
  
}
