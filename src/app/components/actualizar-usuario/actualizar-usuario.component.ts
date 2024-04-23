import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/services/class/class/usuario'; 
import { UsuariosService } from 'src/app/services/usuarios.service'; 
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(
    private usuarioServicie: UsuariosService,
    private route: ActivatedRoute,
    private router: Router
  ) {   }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const userId = params['id'];
      this.usuarioServicie.obtenerUsuarioPorId(userId).subscribe(
        (data: Usuario) => {
          this.usuario = data;
        },
        error => {
          console.error('Error al obtener el usuario:', error);
        }
      );
    });
  }

  onSubmit(): void {
    const userId = this.usuario.id;
    this.usuarioServicie.actualizarUsuario(userId, this.usuario).subscribe(
      data => {
        console.log('Usuario actualizado exitosamente:', data);
        // Aquí puedes realizar cualquier acción adicional después de la actualización
        this.router.navigate(['/usuarios']);
      },
      error => {
        console.error('Error al actualizar el usuario:', error);
      }
    );
  }
}

