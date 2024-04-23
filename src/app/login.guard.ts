import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private ruta:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

       if (localStorage.getItem('nombreAdmin') === null) {
        this.ruta.navigate(['/login'])
        return false;
      }else{
        return true;
      }
  }
}
