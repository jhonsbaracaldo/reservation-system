import { Component, OnInit } from '@angular/core';
import { Movie } from '../clases/movie';
import swal from 'sweetalert2';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-movie',
  templateUrl: './lista-movie.component.html',
  styleUrls: ['./lista-movie.component.css']
})
export class ListaMovieComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerMovies();
  }

  actualizarMovie(id: number): void {
    this.router.navigate(['actualizar-empleado', id]);
  }

  private obtenerMovies(): void {
    this.movieService.obtenerListaMovie().subscribe(
      data => {
        this.movies = data;
      },
      error => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  eliminarMovie(id: number): void {
    swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas eliminar esta película?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.movieService.eliminarMovie(id).subscribe(
          () => {
            this.movies = this.movies.filter(movie => movie.id !== id);
            swal.fire('Eliminada!', 'La película ha sido eliminada exitosamente.', 'success');
          },
          error => {
            console.error('Error al eliminar la película', error);
            swal.fire('Error', 'Se produjo un error al eliminar la película ', 'error');
          }
        );
      }
    });
  }
}
