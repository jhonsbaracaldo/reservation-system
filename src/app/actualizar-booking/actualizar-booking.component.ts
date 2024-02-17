import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../clases/movie';

@Component({
  selector: 'app-actualizar-booking',
  templateUrl: './actualizar-booking.component.html',
  styleUrls: ['./actualizar-booking.component.css']
})
export class ActualizarBookingComponent implements OnInit {

  movie: Movie = new Movie();
  selectedImageUrl: string | ArrayBuffer | null = null;
 
   constructor(private movieService:MovieService, private router:Router, 
     private route:ActivatedRoute){}
 
  
 
   ngOnInit(): void {
     
     this.route.params.subscribe(params => {
       const movieId = params['id'];
       this.movieService.obtenerMoviePorId(movieId).subscribe(
         (data: Movie) => {
           this.movie = data;
         },
         error => {
           console.error('Error al obtener la pelicula:', error);
         }
       );
     });
   }
 
   onSubmit(): void {
     const movieId = this.movie.id;
     this.movieService.actualizarMovie(movieId, this.movie).subscribe(
       data => {
         console.log('Pelicula actualizada exitosamente:', data);
      
         this.router.navigate(['/lista-movie']);
       },
       error => {
         console.error('Error al actualizar la peliula:', error);
       }
     );
   }
 
 
   onFileSelected(event: any) {
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
 
 
