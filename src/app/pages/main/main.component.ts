import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { FlightService } from '../../shared/services/flight.service';
import { flight } from '../../shared/models/flight';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(private flightService: FlightService) {}

  validFlights: Array<flight> = [];

  formGroup = new FormGroup({
    startPlace: new FormControl(''),
    endPlace: new FormControl(''),
    startDate: new FormControl(''),
    backDate: new FormControl(''),
  });

  showOneWayPicker: boolean = true;

  toggleDatePickerVisibility(option: string) {
    if (option === 'oneWay') {
      this.showOneWayPicker = true;
    } else {
      this.showOneWayPicker = false;
    }
  }

  searchFlights() {
    this.validFlights = []
    const { startDate, backDate, startPlace, endPlace } = this.formGroup.value;
    this.flightService
      .getFlightsByParams()
      .valueChanges()
      .subscribe((data) => {
        data.map((flight: any) => {
          const flightStart = flight.startDate
            .toDate()
            .toLocaleDateString('hu-HU');
          const paramStartDate = new Date(
            startDate as string
          ).toLocaleDateString('hu-HU');
          const paramBackDate = new Date(backDate as string).toLocaleDateString(
            'hu-HU'
          );

          if (
            flightStart >= paramStartDate &&
            startPlace === flight.startPlace &&
            endPlace === flight.endPlace
          ) {
            this.validFlights.push(flight);
            console.log(this.validFlights);
          }
        });
      });
  }
}
