import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class CuentasService {

  constructor(
    private http:HttpClient
  ) { }

  url = environment.url;

sakdo:any
  getSaldo() {
    return this.http.get( this.url +  "cuentasControllers.php?id=getSaldos")
    .pipe(
      map((e)=> {
        return e
      }));
   }

   pagos:any
  getPagos() {
    return this.http.get( this.url +  "cuentasControllers.php?id=getPagos")
    .pipe(
      map((e)=> {
        return e
      }));
   }



   getSaldoId(idCliente:any) {
    return this.http.post( this.url +  "cuentasControllers.php?id=getSaldosId",
    { 'idCliente': idCliente })
    .pipe(
      map((e)=> {
        return e
      }));
   }
   getFacturaDetalles(idCliente:any, fechaInicial:any, fechaFinal:any){
    return this.http.post( this.url +  "cuentasControllers.php?id=getDetallesFac",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial , 'fechaFinal':fechaFinal})
    .pipe(
      map((e)=> {
        return e
      }));
   }


   getKilos(idCliente:any, fechaInicial:any, fechaFinal:any){
    return this.http.post( this.url +  "cuentasControllers.php?id=totalKilos",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial , 'fechaFinal':fechaFinal})
    .pipe(
      map((e)=> {
        return e
      }));
   }

   totalEntradaId(idCliente:any) {
    return this.http.post( this.url +  "cuentasControllers.php?id=totalEntradaId",
    { 'idCliente': idCliente })
    .pipe(
      map((e)=> {
        return e
      }));
   }

   totalSalidaId(idCliente:any) {
    return this.http.post( this.url +  "cuentasControllers.php?id=totalSalidaId",
    { 'idCliente': idCliente })
    .pipe(
      map((e)=> {
        return e
      }));
   }


   getCuentaCorriente(idCliente:any, fechaInicial:any, fechaFinal:any){
    return this.http.post( this.url +  "cuentasControllers.php?id=todo",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial , 'fechaFinal':fechaFinal})
    .pipe(
      map((e)=> {
        return e
      }));
   }


   addPagos(idCliente:any,comprobante:any,monto:any,efectivo:any,cheque:any, nroCheque:any,banco:any,propietario:any,idVendedor:any, fechaCobro:any) {
    return this.http.post( this.url +  "cuentasControllers.php?id=addPagos",
    { 'idCliente': idCliente, 'comprobante':comprobante , 
    'monto':monto,'efectivo':efectivo, 'cheque':cheque, 'nroCheque':nroCheque , 
    'banco':banco, 'propietario':propietario, 'idVendedor':idVendedor, 'fechaCobro':fechaCobro})
    .pipe(
      map((e)=> {
        return e
      }));
   }

   saldoAnterior(idCliente:any, fechaInicial:any){
    return this.http.post( this.url +  "cuentasControllers.php?id=saldoAnterior",
    { 'idCliente': idCliente , 'fechaInicial':fechaInicial })
    .pipe(
      map((e)=> {
        return e
      }));
   }
   

// comienza principal


inventa:any
getInventaTropa() {
  return this.http.get( this.url +  "cuentasControllers.php?id=getInventarioTropa")
  .pipe(
    map((e)=> {
      return e
    }));
 }



disponible:any
getInventaTropaDisponible() {
  return this.http.get( this.url +  "cuentasControllers.php?id=getInventarioTropaDisponible")
  .pipe(
    map((e)=> {
      return e
    }));
 }

 vendiso:any
getInventaTropaVendido() {
  return this.http.get( this.url +  "cuentasControllers.php?id=getInventarioTropaVendido")
  .pipe(
    map((e)=> {
      return e
    }));
 }


 cant:any
 getCant() {
   return this.http.get( this.url +  "cuentasControllers.php?id=getCant")
   .pipe(
    map((e)=> {
      return e
    }));
  }
 
getExistencias(nroTropa:number){
  return this.http.post( this.url +  "cuentasControllers.php?id=getExistencia",
   {'nroTropa':nroTropa})
   .pipe(
    map((e)=> {
      return e
    }));
}


}
