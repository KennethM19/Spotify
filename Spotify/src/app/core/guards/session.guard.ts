import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private cookieService: CookieService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  private checkCookieSession(): boolean {
    try {
      const tokenExists = this.cookieService.check('token');
      if (!tokenExists) {
        this.router.navigate(['/auth']);
        return false;
      }
      return true;
    } catch (err) {
      console.error('Error checking cookie session:', err);
      return false;
    }
  }
}


