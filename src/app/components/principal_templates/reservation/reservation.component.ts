import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from 'src/app/services/class/booking'; 
import { BookingService } from 'src/app/services/booking.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  booking: Booking = new Booking();
  reservationDetails: Booking | null = null;

  constructor(private bookingService: BookingService, private router: Router) { }

  guardarReservacion(): void {
    // Verificar si this.booking.hora_funcion no es undefined antes de llamar a toString()
    if (this.booking.hora_funcion !== undefined) {
      const bookingToSend: Booking = {
        ...this.booking,
        hora_funcion: this.booking.hora_funcion.toString() // Formatea la fecha
      };
  
      console.log(bookingToSend); // Verifica los datos antes de enviarlos al servicio
  
      this.bookingService.registrarReservacion(bookingToSend).subscribe(
        dato => {
          console.log(dato);
          this.reservationDetails = bookingToSend; // Almacena los detalles de la reserva
          this.mostrarMensaje(this.reservationDetails); // Muestra el mensaje emergente con los detalles de la reserva
        },
        error => console.log(error)
      );
    } else {
      console.error('this.booking.hora_funcion es undefined');
      // Aquí puedes manejar el caso de error según sea necesario para tu aplicación
    }
  }


  

  
  mostrarMensaje(booking: Booking): void {
    Swal.fire({
      title: 'Reserva exitosa',
      html: `¡Tu reserva ha sido realizada con éxito!<br>
             Detalles de la reserva:<br>
             ####### Vales monda Mauricio #######<br>
             Película: ${booking.name}<br>
             Hora de la función: ${booking.hora_funcion}<br>
             Sala: ${booking.sala}<br>
             Cantidad de asientos: ${booking.asientos}`,
             icon: 'success',
             showCancelButton: true, // Mostrar el botón de cancelar
             confirmButtonText: 'Actualizar', // Texto del botón de actualizar
             cancelButtonText: 'Ok' // Texto del botón de cancelar
           }).then((result) => {
             if (result.isConfirmed) {
               // Si se hace clic en "Actualizar", dirigir a la página de actualización
               this.actualizarEmpleado(booking.id);

               
              }
            
           });
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['lista-reserva'])
  }

  ngOnInit(): void {
    console.log(this.booking);
    console.log(this.mostrarMensaje);
  }

  onSubmit(): void {
    this.guardarReservacion();
  }
}
