import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Templates/header/header.component';
import { ReservationComponent } from './vistas/reservation/reservation.component';
import { ReservationListComponent } from './vistas/reservation-list/reservation-list.component';

import {CdkMenuModule} from '@angular/cdk/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewMovieComponent } from './vistas/view-movie/view-movie.component';
import { FooterComponent } from './Templates/footer/footer.component';
import { LoaderComponent } from './vistas/loader/loader.component';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//Enrutamiento

import { LoginComponent } from './vistas/login/login.component';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgImageSliderModule } from 'ng-image-slider';
import { RegistroComponent } from './vistas/registro/registro.component';
// componentes 
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterMovieComponent } from './register-movie/register-movie.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ListaMovieComponent } from './lista-movie/lista-movie.component';
import { ActualizarMovieComponent } from './actualizar-movie/actualizar-movie.component';
import { UserlistMovieComponent } from './userlist-movie/userlist-movie.component';
import { MatMenuModule } from '@angular/material/menu';
import { SoonMovieComponent } from './soon-movie/soon-movie.component';
import { ActualizarBookingComponent } from './actualizar-booking/actualizar-booking.component';
import { CookieService } from 'ngx-cookie-service';
import { ListaBookingComponent } from './lista-booking/lista-booking.component';
import { DateTimeFormatPipe } from '../pipe/date-time-format.pipe';





@NgModule({
  declarations: [
    
    UserlistMovieComponent,
    AppComponent,
    HeaderComponent,
    ReservationComponent,
    ReservationListComponent,
    LoginComponent,
    ViewMovieComponent,
    FooterComponent,
    LoaderComponent,
    RegistroComponent,
    RegistrarUsuarioComponent,
    ActualizarUsuarioComponent,
    RegisterMovieComponent,
    ListaMovieComponent,
    ActualizarMovieComponent,
    SoonMovieComponent,
    ActualizarBookingComponent,
    ListaBookingComponent,
    DateTimeFormatPipe,
  
   
    

 

   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkMenuModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatGridListModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    FormsModule, 
    NgxDropzoneModule,
    MatMenuModule,
 
    
],
  providers: [
    CookieService,
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
