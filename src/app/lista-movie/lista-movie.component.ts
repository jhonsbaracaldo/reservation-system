import { Component } from '@angular/core';
import { Movie } from '../clases/movie';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-lista-movie',
  templateUrl: './lista-movie.component.html',
  styleUrls: ['./lista-movie.component.css']
})
export class ListaMovieComponent {

  

 movie:Movie[];


 constructor(private movieService:MovieService, private router:Router){}

  ngOnInit(): void {
    this.obtenerMovie();
 
  }

  actualizarMovie(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }


  private obtenerMovie(){
  this.movieService.obtenerListaMovie().subscribe(dato=>{
  this.movie =dato;
     });
  }

  eliminarMovie(id: number): void {
  
    swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas eliminar este Pelicula?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
         this.movieService.eliminarMovie(id).subscribe(
          () => {
            this.movie = this.movie.filter(movies => movies.id !== id);
            swal.fire('Eliminado!', 'La pelicula ha sido eliminado exitosamente.', 'success');
          },
          error => {
            console.error('Error al eliminar la pelicula', error);
            swal.fire('Error', 'Se produjo un error al eliminar la pelicula ', 'error');
          }
        );
      }
    });
  }
  

}
