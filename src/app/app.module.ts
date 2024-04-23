import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/footer_and_header/header/header.component'; 
import { ReservationComponent } from './components/principal_templates/reservation/reservation.component'; 
import { ReservationListComponent } from './components/principal_templates/reservation-list/reservation-list.component'; 

import {CdkMenuModule} from '@angular/cdk/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewMovieComponent } from './components/principal_templates/view-movie/view-movie.component'; 
import { FooterComponent } from './components/footer_and_header/footer/footer.component'; 
import { LoaderComponent } from './components/principal_templates/loader/loader.component'; 
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

//Enrutamiento

import { LoginComponent } from './components/principal_templates/login/login.component'; 
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgImageSliderModule } from 'ng-image-slider';
import { RegistroComponent } from './components/principal_templates/registro/registro.component'; 
// componentes 
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component'; 
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterMovieComponent } from './components/register-movie/register-movie.component'; 
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ListaMovieComponent } from './components/lista-movie/lista-movie.component';
import { ActualizarMovieComponent } from './components/actualizar-movie/actualizar-movie.component'; 
import { UserlistMovieComponent } from './components/userlist-movie/userlist-movie.component'; 
import { MatMenuModule } from '@angular/material/menu';
import { SoonMovieComponent } from './components/soon-movie/soon-movie.component'; 
import { ActualizarBookingComponent } from './components/actualizar-booking/actualizar-booking.component'; 
import { CookieService } from 'ngx-cookie-service';
import { ListaBookingComponent } from './components/lista-booking/lista-booking.component'; 
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
