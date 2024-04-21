import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { ViewMovieComponent } from './vistas/view-movie/view-movie.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { ReservationComponent } from './vistas/reservation/reservation.component';
import{ LoaderComponent} from './vistas/loader/loader.component';
import { ReservationListComponent } from './vistas/reservation-list/reservation-list.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { RegisterMovieComponent } from './register-movie/register-movie.component';
import { ListaMovieComponent } from './lista-movie/lista-movie.component';
import { ActualizarMovieComponent } from './actualizar-movie/actualizar-movie.component';
import { UserlistMovieComponent } from './userlist-movie/userlist-movie.component';
import { SoonMovieComponent } from './soon-movie/soon-movie.component';
import { ActualizarBookingComponent } from './actualizar-booking/actualizar-booking.component';
import { ListaBookingComponent } from './lista-booking/lista-booking.component';

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
