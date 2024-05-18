import { Timestamp } from "@angular/fire/firestore";

export interface flight{
    id: string;
    airline: string;
    startPlace: string;
    endPlace: string;
    startDate: Timestamp;
    backDate: Timestamp;
    price: number;
    seatsRemaining: number;
}