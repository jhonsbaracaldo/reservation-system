import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './class/movie'; 

@Injectable({
  providedIn: 'root'
})
export class MovieService {
// endpoint del back 

  private baseUrl ="http://localhost:8080/v1/Movie/allMovie"
  private baseUrl2 ="http://localhost:8080/v1/Movie/addMovie"
  private baseUrl3 ="http://localhost:8080/v1/Movie/updateMovie"
  private baseUrl4 ="http://localhost:8080/v1/Movie/search"
  private baseUrl5 ="http://localhost:8080/v1/Movie/deleteMovie"
  constructor(private httpClient:HttpClient ) { }
   // metodo para retornar los usuarios
 
   obtenerListaMovie() :Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(`${this.baseUrl}`)
  }
 
   //metodo sirve para registrar usuarios 
  registrarMovie(movie:Movie): Observable<object>{
  return this.httpClient.post(`${this.baseUrl2}`,movie)
  }
  actualizarMovie(id: number, movie:Movie): Observable<object> {
    return this.httpClient.put(`${this.baseUrl3}/${id}`,movie);
  }
  
  obtenerMoviePorId(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.baseUrl4}/${id}`);
  }

  eliminarMovie(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl5}/${id}`);
  }
 
}

