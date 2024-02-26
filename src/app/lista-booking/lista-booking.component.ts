import { Component, OnInit } from '@angular/core';
import { Booking } from '../clases/booking';
import swal from 'sweetalert2';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-booking',
  templateUrl: './lista-booking.component.html',
  styleUrls: ['./lista-booking.component.css']
})
export class ListaBookingComponent implements OnInit {

  booking: Booking = new Booking();
  selectedImageUrl: string | ArrayBuffer | null = null;

  constructor(private bookingService: BookingService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerReservaciones(); // Llama a la función para obtener las reservaciones al inicializar el componente
  }

  obtenerReservaciones(): void {
    const BookingId = this.route.snapshot.params['id'];
    if (BookingId) {
      this.bookingService.obtenerReservacionPorId(BookingId).subscribe(
        (data: Booking) => {
          this.booking = data;
        },
        error => {
          console.error('Error al obtener la reserva:', error);
        }
      );
    } else {
      console.error('BookingId es undefined');
    }
  }

  onSubmit(): void {
    const BookingId = this.booking.id;
    this.bookingService.actualizarReservacion(BookingId, this.booking).subscribe(
      data => {
        console.log('Reservación actualizada exitosamente:', data);
        this.router.navigate(['/lista-reserva']);
      },
      error => {
        console.error('Error al actualizar la reserva:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedImageUrl = reader.result;
      };
    }
  }
}
