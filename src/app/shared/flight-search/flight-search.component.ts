import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FlightService } from '../services/flight.service';
import { flight } from '../models/flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrl: './flight-search.component.css',
})
export class FlightSearchComponent {
  constructor(private flightService: FlightService) {}

  validFlights: Array<flight> = [];

  formGroup = new FormGroup({
    startPlace: new FormControl(''),
    endPlace: new FormControl(''),
    startDate: new FormControl(''),
    backDate: new FormControl(''),
  });

}
