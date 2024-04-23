import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


  @Injectable()
export class LoginService {

  constructor( private http:HttpClient) { }
  url = environment.url;

  
  getUsuario(nombreAdmin:any, password:any) {
    return this.http.post( this.url + "loginController.php?id=getUsuarios",
      {'nombreAdmin': nombreAdmin, 'password': password })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  getUsuarios() {
    return this.http.get( this.url + "adminController.php?id=getUsuarios1")
    .pipe(
      map((e)=> {
        return e
      }));
  }

  getUsuarioActual(idAdmin:any) {
    return this.http.post( this.url + "loginController.php?id=usuarioEstado",
      {'idAdmin': idAdmin})
      .pipe(
        map((e)=> {
          return e
        }));
  }
  addUsuario(nombreAdmin:any , password:any , rol:any ) {
    return this.http.post( this.url + "adminController.php?id=addAdmin",
      { 'nombreAdmin':nombreAdmin , 'password': password, 'rol':rol })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  updateUsuario(password:any , rol:any , idAdmin:any) {
    return this.http.post( this.url + "adminController.php?id=updateAdmin",
      {'password': password, 'rol':rol, 'idAdmin':idAdmin })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  deleteUsuarioActual(idAdmin:any) {
    return this.http.post( this.url + "loginController.php?id=delete",
      {'idAdmin': idAdmin})
      .pipe(
        map((e)=> {
          return e
        }));
  }

}
