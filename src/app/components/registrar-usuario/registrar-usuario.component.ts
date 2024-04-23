import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/class/class/usuario'; 
import { NgClass } from '@angular/common';
import { UsuariosService } from 'src/app/services/usuarios.service'; 
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

usuario : Usuario =new Usuario();
constructor(private usuarioServicie:UsuariosService, private router:Router){}

ngOnInit(): void {
  console.log(this.usuario);
}

guardarUsuario(){
  this.usuarioServicie.registrarUsuario(this.usuario).subscribe(dato=>{
    console.log(dato);
    this.irAlaListaDeEmpleados();
  },error=>console.log(error));

}
irAlaListaDeEmpleados(){
  this.router.navigate (['usuarios'])
}

onSubmit(){
  this.guardarUsuario();
}

}
