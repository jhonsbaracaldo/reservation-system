import { Component, OnInit } from '@angular/core';
import { Movie } from '../clases/movie';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-movie',
  templateUrl: './register-movie.component.html',
  styleUrls: ['./register-movie.component.css']
})
export class RegisterMovieComponent  implements OnInit{

  movie :Movie  =new Movie();


constructor(private movieService:MovieService, private router:Router){}
// cargar imagen 
selectedImageUrl: string | ArrayBuffer | null = null;
 
  ngOnInit(): void {
    console.log(this.movie);
  }
  
  guardarUsuario(){
    this.movieService.registrarMovie(this.movie).subscribe(dato=>{
      console.log(dato);
      this.irAlaListaDeEmpleados();
    },error=>console.log(error));  
  
  }
  irAlaListaDeEmpleados(){
    this.router.navigate ([''])
  }
  
  onSubmit(){
    this.guardarUsuario();
  }
 // cargando archivo 
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
