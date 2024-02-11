import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/class/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DataService } from 'src/services/Model/data.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{

  usuarios :Usuario[];


  constructor(private usuarioService :UsuariosService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
this.usuarioService.obtenerListaUsuarios().subscribe(dato=>{
  this.usuarios =dato;
     });
  }

}
