import { Component } from '@angular/core';
import Swal from 'sweetalert2'; // Cambia 'swal' a 'Swal'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectLocation(location: string) {
    console.log('Ubicación seleccionada:', location);
    // Aquí puedes realizar acciones adicionales, como navegar a una página específica
  }

  mostrarAlertaConstruccion(): void {
    Swal.fire({
      title: 'En construcción',
      text: 'Estamos trabajando para brindarte un mejor servicio',
      icon: 'info'
    });
}


scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
}
