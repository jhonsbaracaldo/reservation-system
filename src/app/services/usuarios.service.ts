import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../class/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // back para la vista de los usuarios
  private baseUrl ="http://localhost:8080/v1/api/view"
  private baseUrl2 ="http://localhost:8080/v1/api/add"
  private baseUrl3 ="http://localhost:8080/v1/api/update"
  private baseUrl4 ="http://localhost:8080/v1/api/search"
  private baseUrl5 ="http://localhost:8080/v1/api/delete"
  constructor(private httpClient:HttpClient ) { }
   // metodo para retornar los usuarios
 
   obtenerListaUsuarios() :Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}`)
  }
 
   //metodo sirve para registrar usuarios 
  registrarUsuario(usuario:Usuario): Observable<object>{
  return this.httpClient.post(`${this.baseUrl2}`,usuario)
  }
  actualizarUsuario(id: number, usuario: Usuario): Observable<object> {
    return this.httpClient.put(`${this.baseUrl3}/${id}`,usuario);
  }
  
  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseUrl4}/${id}`);
  }

  eliminarUsuario(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl5}/${id}`);
  }
 
}
