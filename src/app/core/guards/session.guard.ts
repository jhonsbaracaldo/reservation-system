/*import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.checkCookieSession();
  }

  checkCookieSession(): Observable<boolean> {
    try {
      const tokenExists: boolean = this.cookieService.check('token');
      if (!tokenExists) {
        this.router.navigate(['/login']);
        return of(false);
      }
      return of(true);
    } catch (error) {
      console.log('Error al verificar el token:', error);
      this.router.navigate(['/error']); // Redirige a una página de error
      return of(false);
    }
  }
}*/
