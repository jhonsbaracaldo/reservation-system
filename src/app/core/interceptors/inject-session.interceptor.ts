/*import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class InjectSessionInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const noAuthRequired = [
      '/login'
     
    ];

    const requiresAuth = !noAuthRequired.some(url => request.url.toLowerCase().includes(url.toLowerCase()));

    if (requiresAuth) {
      const token = this.cookieService.get('token');
      if (token) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next.handle(request).pipe(
      catchError(error => {
        console.error('Error en el interceptor:', error);
        // Podrías manejar el error de alguna manera si es necesario
        return next.handle(request); // Devuelve la solicitud original en caso de error
      })
    );
  }
}*/
