import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/services/class/class/usuario'; 
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DataService } from 'src/services/Model/data.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{


  usuarios :Usuario[];


  constructor(private usuarioService :UsuariosService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
 
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }


  private obtenerUsuarios(){
this.usuarioService.obtenerListaUsuarios().subscribe(dato=>{
  this.usuarios =dato;
     });
  }
  eliminarUsuario(id: number): void {
  
    swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de que deseas eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
         this.usuarioService.eliminarUsuario(id).subscribe(
          () => {
            this.usuarios = this.usuarios.filter(usuario => usuario.id !== id);
            swal.fire('Eliminado!', 'El usuario ha sido eliminado exitosamente.', 'success');
          },
          error => {
            console.error('Error al eliminar el usuario:', error);
            swal.fire('Error', 'Se produjo un error al eliminar el usuario.', 'error');
          }
        );
      }
    });
  }
  
}
