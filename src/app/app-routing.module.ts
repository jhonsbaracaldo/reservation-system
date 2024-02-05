import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ViewMovieComponent },
  { path: 'registre', component: RegistroComponent },
  { path: 'reservation', component: ReservationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
