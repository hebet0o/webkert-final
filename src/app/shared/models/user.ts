import { FieldValue } from "@angular/fire/firestore";

export interface user{
    id: string;
    email: string;
    username: string;
    bookedTickets?: FieldValue | Array<string>
}