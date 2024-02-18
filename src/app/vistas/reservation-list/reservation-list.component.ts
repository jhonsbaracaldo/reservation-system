import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/class/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DataService } from 'src/services/Model/data.service';
import { Reservacion } from 'src/services/Model/Interfaz/reservation.interface';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit{
  reservaciones: Reservacion[] = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', telefono: '123456789', email: 'juan@example.com' },
    { id: 2, nombre: 'María', apellido: 'García', telefono: '987654321', email: 'maria@example.com' },
    { id: 3, nombre: 'Pedro', apellido: 'Rodríguez', telefono: '456789123', email: 'pedro@example.com' }
  ];

  usuarios :Usuario[];


  constructor(private usuarioService :UsuariosService, private router:Router) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerReservaciones().subscribe(reservaciones => {
      console.log(reservaciones);
    });
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id]);
  }

  private obtenerReservaciones(): Observable<Reservacion[]> {
    return of(this.reservaciones);
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
