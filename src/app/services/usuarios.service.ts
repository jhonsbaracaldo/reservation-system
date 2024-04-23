import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './class/class/usuario'; 
import { environment } from 'src/environments/environmen';
import { UsuarioRegitro } from './class/class/UsuarioRegistro'; 
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  // back para la vista de los usuarios
  private baseUrl = `${environment.apiUrl}/view`;
  private baseUrl2 = "http://localhost:8080/v1/api/add";
  private baseUrl3 = `${environment.apiUrl}/update`;
  private baseUrl4 = `${environment.apiUrl}/search`;
  private baseUrl5 = `${environment.apiUrl}/delete`;

  //
  private url = "http://localhost:8080/auth/register";
  private url1 = "http://localhost:8080/user/all";

  constructor(private httpClient:HttpClient ) { }
   // metodo para retornar los usuarios
 
   obtenerListaUsuarios() :Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}`)
  }
 
   //metodo sirve para registrar usuarios 
  registrarUsuario(usuario:Usuario): Observable<object>{
  return this.httpClient.post(`${this.baseUrl2}`,usuario)
  }

  // actualizar usuario 
  actualizarUsuario(id: number, usuario: Usuario): Observable<object> {
    return this.httpClient.put(`${this.baseUrl3}/${id}`,usuario);
  }
  // obterner usuario por id 
  obtenerUsuarioPorId(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.baseUrl4}/${id}`);
  }
// eliminar usuario 
  eliminarUsuario(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl5}/${id}`);
  }




// registrar usuario cine 
  registrarUsuarioCine(usuarioRegistro:UsuarioRegitro): Observable<object>{
  return this.httpClient.post(`${this.url}`,usuarioRegistro)
  }
  // obtener lista de usuarios de cine 
     // metodo para retornar los usuarios
 
     obtenerListaUsuariosCine() :Observable<UsuarioRegitro[]>{
      return this.httpClient.get<UsuarioRegitro[]>(`${this.url1}`)
    }
   
 
}
