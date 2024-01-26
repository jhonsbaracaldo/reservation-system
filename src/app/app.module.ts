import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

import {CdkMenuModule} from '@angular/cdk/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
//Enrutamiento

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReservationComponent,
    ReservationListComponent,
    LoginComponent,
    ViewMovieComponent,
    FooterComponent,
    LoaderComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkMenuModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,

    // enrutamiento 
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
