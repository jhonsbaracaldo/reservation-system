import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { generate } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor( ) {}


  private Lismovies=[
    {
    name:'Kunfu Panda 4',
     Estreno:'25-01-2024',
     genero:'Infantil',
     image:'card1.png'
   },
   {
    name:'Deapool 3',
     Estreno:'25-03-2024',
     genero:'Accion y comedia',
     image:'deadpool-3.webp'
   },
   {
    name:'Mi villano favorito 4',
     Estreno:'25-04-2024',
     genero:'Infantil',
     image:'cine1.webp'
   },

   {
    name:'Deapool 3',
     Estreno:'25-03-2024',
     genero:'Accion y comedia',
     image:'deadpool-3.webp'
   },
   {
    name:'Mi villano favorito 4',
     Estreno:'25-04-2024',
     genero:'Infantil',
     image:'cine1.webp'
   }
  
  ];


   
       get movies(){
          return this.Lismovies;
        }



}
