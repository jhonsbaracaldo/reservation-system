import { Component, OnInit, OnChanges } from '@angular/core';
import { Booking } from '../clases/booking';
import swal from 'sweetalert2';
import { BookingService } from '../services/booking.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-lista-booking',
  templateUrl: './lista-booking.component.html',
  styleUrls: ['./lista-booking.component.css']
})
export class ListaBookingComponent implements OnInit, OnChanges {

  booking: Booking = new Booking();
  selectedImageUrl: string | ArrayBuffer | null = null;

  constructor(private bookingService: BookingService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerReservaciones(); // Llama a la función para obtener las reservaciones al inicializar el componente
  }

  ngOnChanges(): void {
    this.obtenerReservaciones(); // Llama a la función para obtener las reservaciones cuando hay cambios en el componente
  }

  obtenerReservaciones(): void {
    this.route.params.subscribe(params => {
      const BookingId = params['id'];
      this.bookingService.obtenerReservacionPorId(BookingId).subscribe(
        (data: Booking) => {
          this.booking = data;
        },
        error => {
          console.error('Error al obtener la pelicula:', error);
        }
      );
    });
  }

  onSubmit(): void {
    const BookingId = this.booking.id;
    this.bookingService.actualizarReservacion(BookingId, this.booking).subscribe(
      data => {
        console.log('Pelicula actualizada exitosamente:', data);
        this.router.navigate(['/lista-movie']);
      },
      error => {
        console.error('Error al actualizar la peliula:', error);
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
