import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuarioRegitro } from 'src/app/services/class/class/UsuarioRegistro';   
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarioRegistro : UsuarioRegitro =new UsuarioRegitro();
  constructor(private usuarioServicie:UsuariosService ,private router:Router){}
  
  ngOnInit(): void {
    console.log(this.usuarioRegistro);
  }
  
  guardarUsuarioRegistro(){
    this.usuarioServicie.registrarUsuarioCine(this.usuarioRegistro).subscribe(dato=>{
      console.log(dato);
      this.irLogin();
    },error=>console.log(error));
  
  }
  irLogin(){
    this.router.navigate (['login'])
  }
  
  onSubmit(){
    this.guardarUsuarioRegistro();
  }
  
  }

