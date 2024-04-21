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
     image:'Kung_Fu_Panda.jpg'
   },
   {
    name:'Deapool 3',
     Estreno:'25-03-2024',
     genero:'Accion y comedia',
     image:'trailer4.jpg'
   },
   {
    name:'Bood Marly',
     Estreno:'25-04-2024',
     genero:'Musical',
     image:'trailer5.jpg'
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
     image:'Gru.jpg'
   },
   
  
  ];


   
       get movies(){
          return this.Lismovies;
        }



}
