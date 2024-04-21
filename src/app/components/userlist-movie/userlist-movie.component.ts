import { Component, OnInit } from '@angular/core';
import { UsuarioRegitro } from '../clases/class/UsuarioRegistro';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userlist-movie',
  templateUrl: './userlist-movie.component.html',
  styleUrls: ['./userlist-movie.component.css']
})
export class UserlistMovieComponent  implements OnInit {
  
  usuarioRegistro :UsuarioRegitro[];
  

  constructor(private usuarioService: UsuariosService,private router:Router) {}

  
  ngOnInit(): void {
    this.obtenerListaUsuario();
   }

   private obtenerListaUsuario(){
    this.usuarioService.obtenerListaUsuariosCine().subscribe(dato=>{
      this.usuarioRegistro =dato;
         });
      }
  
      Esconcerpassword(usuario: UsuarioRegitro): void {
        usuario.mostrarContrasena = !usuario.mostrarContrasena;
      }
      

}
