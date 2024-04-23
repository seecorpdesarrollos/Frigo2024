import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class LogoutGuard implements CanActivate {
    constructor(private ruta:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (localStorage.getItem('nombreAdmin') === null) {
       return true;
     }else{
       this.ruta.navigate(['/principal']);
       return false;
     }
  }
}
