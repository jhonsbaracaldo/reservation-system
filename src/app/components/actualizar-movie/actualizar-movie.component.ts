import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service'; 
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Movie } from 'src/app/services/class/movie'; 

@Component({
  selector: 'app-actualizar-movie',
  templateUrl: './actualizar-movie.component.html',
  styleUrls: ['./actualizar-movie.component.css']
})
export class ActualizarMovieComponent implements OnInit {
  
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


