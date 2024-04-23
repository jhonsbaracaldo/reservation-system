import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/principal_templates/login/login.component'; 
import { ViewMovieComponent } from './components/principal_templates/view-movie/view-movie.component'; 
import { RegistroComponent } from './components/principal_templates/registro/registro.component'; 
import { ReservationComponent } from './components/principal_templates/reservation/reservation.component'; 
import { LoaderComponent } from './components/principal_templates/loader/loader.component'; 
import { ReservationListComponent } from './components/principal_templates/reservation-list/reservation-list.component'; 
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component'; 
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component'; 
import { RegisterMovieComponent } from './components/register-movie/register-movie.component'; 
import { ListaMovieComponent } from './components/lista-movie/lista-movie.component'; 
import { ActualizarMovieComponent } from './components/actualizar-movie/actualizar-movie.component'; 
import { UserlistMovieComponent } from './components/userlist-movie/userlist-movie.component'; 
import { SoonMovieComponent } from './components/soon-movie/soon-movie.component'; 
import { ActualizarBookingComponent } from './components/actualizar-booking/actualizar-booking.component'; 
import { ListaBookingComponent } from './components/lista-booking/lista-booking.component'; 

const routes: Routes = [
  { path: '', component: LoaderComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ViewMovieComponent},
  { path: 'registre', component: RegistroComponent },
  { path: 'reservation', component: ReservationComponent },
{path: 'usuarios',component:ReservationListComponent,children:[

    { path: 'registrar', component: RegistrarUsuarioComponent },
    
  ]},

  { path: 'actualizar-empleado/:id', component: ActualizarUsuarioComponent},
  { path:'registrar-movie',component:RegisterMovieComponent},
  {path:'lista-movie',component:ListaMovieComponent},
  {path:'update-movie/:id',component:ActualizarMovieComponent},
  
  ///lista de usuarios
{path:'lista-User',component:UserlistMovieComponent},

{path:'Proximamente',component:SoonMovieComponent},
{
  path:'lista-reserva',component:ActualizarBookingComponent},
  {path:'actualizar-reserva/:id',component:ListaBookingComponent},
  {path:'actualizar-reserva',component:ListaBookingComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
