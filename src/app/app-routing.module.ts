import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';
import { ViewMovieComponent } from './vistas/view-movie/view-movie.component';
import { RegistroComponent } from './vistas/registro/registro.component';
import { ReservationComponent } from './vistas/reservation/reservation.component';
import{ LoaderComponent} from './vistas/loader/loader.component';
import { ReservationListComponent } from './vistas/reservation-list/reservation-list.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  { path: '', component: LoaderComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: ViewMovieComponent },
  { path: 'registre', component: RegistroComponent },
  { path: 'reservation', component: ReservationComponent },
{path: 'usuarios',component:ReservationListComponent,children:[

    { path: 'registrar', component: RegistrarUsuarioComponent }
  ]},
 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
