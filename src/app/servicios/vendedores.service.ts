import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable()
export class VendedoresService {

  constructor( private http:HttpClient) { }

  url = environment.url;

  addVendedor(nombreVendedor:any,  telefonoVendedor:any) {
    return this.http.post( this.url + "vendedorControllers.php?id=addVendedor",
      {'nombreVendedor': nombreVendedor, 'telefonoVendedor': telefonoVendedor })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  vendedor:any;
    getVendedores() {
    return this.http.get( this.url + "vendedorControllers.php?id=geVen")
    .pipe(
      map((e)=> {
        return e
      }));
  }

  inactivos:any;
    getVendedoresInactivos() {
    return this.http.get( this.url + "vendedorControllers.php?id=geVenInactivo")
    .pipe(
      map((e)=> {
        return e
      }));
  }




  getVen: any;
getVededorId(idVendedor:number) {
 return this.http.post( this.url + "vendedorControllers.php?id=geVenId", { 'idVendedor': idVendedor })
 .pipe(
  map((e)=> {
    return e
  }));
}

baja: any;
bajaVededorId(idVendedor:number) {
return this.http.post( this.url + "vendedorControllers.php?id=bajaVenId", { 'idVendedor': idVendedor })
.pipe(
  map((e)=> {
    return e
  }));
}

alta: any;
altaVededorId(idVendedor:number) {
return this.http.post( this.url + "vendedorControllers.php?id=altaVenId", { 'idVendedor': idVendedor })
.pipe(
  map((e)=> {
    return e
  }));
}


resultados: any;
comprobarVen(nombreVendedor:any){
  return this.http.post( this.url + "vendedorControllers.php?id=comprobarVen",
  {'nombreVendedor':nombreVendedor})
  .pipe(
    map((e)=> {
      return e
    }));

}

editarVendedor(nombreVendedor:any,  telefonoVendedor:any ,idVendedor:number) {
  return this.http.post( this.url + "vendedorControllers.php?id=editarVendedor",
    {'nombreVendedor': nombreVendedor, 'telefonoVendedor': telefonoVendedor, 'idVendedor':idVendedor })
    .pipe(
      map((e)=> {
        return e
      }));
}


}
