import { NgModule, OnInit } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire/compat'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    MatCardModule,
    MatMenuModule,
    RouterLink,
    RouterLinkActive,
    FlexLayoutModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatInputModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule,
    AngularFireModule.initializeApp({"projectId":"planeticket-8ba5c","appId":"1:323207833483:web:ce0351e7486020e477318e","storageBucket":"planeticket-8ba5c.appspot.com","apiKey":"AIzaSyBrH3CFjf54pAFPUR2538R7olwvSvfUjIc","authDomain":"planeticket-8ba5c.firebaseapp.com","messagingSenderId":"323207833483","measurementId":"G-F100X7QR26"}),
    //provideFirebaseApp(() => initializeApp({"projectId":"planeticket-8ba5c","appId":"1:323207833483:web:ce0351e7486020e477318e","storageBucket":"planeticket-8ba5c.appspot.com","apiKey":"AIzaSyBrH3CFjf54pAFPUR2538R7olwvSvfUjIc","authDomain":"planeticket-8ba5c.firebaseapp.com","messagingSenderId":"323207833483","measurementId":"G-F100X7QR26"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule{
}
