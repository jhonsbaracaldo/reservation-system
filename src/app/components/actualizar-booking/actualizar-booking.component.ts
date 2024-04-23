import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/services/class/booking'; 
import swal from 'sweetalert2';
import { BookingService } from 'src/app/services/booking.service'; 
import { MovieService } from 'src/app/services/movie.service'; 
import { Movie } from 'src/app/services/class/movie'; 

@Component({
  selector: 'app-actualizar-booking',
  templateUrl: './actualizar-booking.component.html',
  styleUrls: ['./actualizar-booking.component.css']
})
export class ActualizarBookingComponent implements OnInit {

  booking:Booking[];
  constructor(
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {   }

  ngOnInit(): void {
    this.ObtenerReservacion();
 
  }

  actualizarReservacion(id:number){
    this.router.navigate(['actualizar-reserva',id]);
  }


  

  private ObtenerReservacion(){
  this.bookingService.obtenerListaReservaicones().subscribe(dato=>{
  this.booking=dato;
     });
  }
 

  
  eliminarReservacion(id: number): void {
  
    swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas eliminar este Reservacion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
         this.bookingService.eliminarReservation(id).subscribe(
          () => {
            this.booking = this.booking.filter( bookings=> bookings.id !== id);
            swal.fire('Eliminado!', 'La reserva se elimino  exitosamente.', 'success');
          },
          error => {
            console.error('Error al eliminar la pelicula', error);
            swal.fire('Error', 'Se produjo un error al eliminar la reserva ', 'error');
          }
        );
      }
    });
  }

}