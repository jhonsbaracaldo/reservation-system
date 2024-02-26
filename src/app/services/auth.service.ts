/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = "http://localhost:8080/auth/login";

  constructor(private http: HttpClient, private cookies: CookieService, private router: Router) {}

  sendCredential(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post(`${this.URL}`, user, { responseType: 'text' }).pipe(
      tap((responseOK: string) => {
        this.cookies.set('token', responseOK, 1, '/');
        this.router.navigate(['/home']);
      }),
      catchError((error) => {
        console.error('Error al enviar credenciales:', error);
        // Podrías manejar el error mostrando un mensaje al usuario
        return throwError(error);
      })
    );
  }

  sendAuthenticatedRequest(url: string, body: any): Observable<any> {
    const token = this.cookies.get('token');
    if (!token) {
      this.router.navigate(['/login']);
      return throwError('No hay token disponible');
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(url, body, { headers }).pipe(
      catchError((error) => {
        console.error('Error en la solicitud autenticada:', error);
        // Podrías manejar el error mostrando un mensaje al usuario
        return throwError(error);
      })
    );
  }
}*/
