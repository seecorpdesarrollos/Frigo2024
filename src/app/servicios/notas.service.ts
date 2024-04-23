import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";


@Injectable()
export class NotasService {

  constructor( private http:HttpClient) { }
  url = environment.url;

  notaCredito:any;
  getNotaCredito(desde:any,hasta:any) {
  return this.http.post(this.url +  "notasController.php?id=getNotaCredito" , {'desde':desde , 'hasta':hasta})
  .pipe(
    map((e)=> {
      return e
    }));
}

getNotaCreditoId(idCliente:any) {
  return this.http.post(this.url +  "notasController.php?id=getNotaCreditoId" , {'idCliente':idCliente })
  .pipe(
    map((e)=> {
      return e
    }));
}

  addNotaCredito(descripcionCredito:any,cantidadCredito:any,importeCredito:any,idCliente:any, fechaCredito:any) {
    return this.http.post(this.url +  "notasController.php?id=addNotaCredito",
      {'descripcionCredito': descripcionCredito, 'cantidadCredito': cantidadCredito,
      'importeCredito': importeCredito, 'idCliente': idCliente , 'fechaCredito':fechaCredito })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  deleteNotaCredito(idNotaCredito:any,idCliente:any , totalCredito:any) {
    return this.http.post(this.url +  "notasController.php?id=deleteNotaCredito",
      {'idNotaCredito': idNotaCredito,  'idCliente': idCliente , 'totalCredito':totalCredito })
      .pipe(
        map((e)=> {
          return e
        }));
  }


  // debitos


  addNotaDebito(descripcionDebito:any,cantidadDebito:any,importeDebito:any,nroCheque:any,idCliente:any, fechaDebito:any) {
    return this.http.post(this.url +  "notasController.php?id=addNotaDebito",
      {'descripcionDebito': descripcionDebito, 'cantidadDebito': cantidadDebito,
      'importeDebito': importeDebito,  'nroCheque': nroCheque, 'idCliente': idCliente , 'fechaDebito':fechaDebito })
      .pipe(
        map((e)=> {
          return e
        }));
  }


  addNotaDebitoSinCheque(descripcionDebito:any,cantidadDebito:any,importeDebito:any ,idCliente:any, fechaDebito:any) {
    return this.http.post(this.url +  "notasController.php?id=addNotaDebitoSinCheque",
      {'descripcionDebito': descripcionDebito, 'cantidadDebito': cantidadDebito,
      'importeDebito': importeDebito, 'idCliente': idCliente , 'fechaDebito':fechaDebito})
      .pipe(
        map((e)=> {
          return e
        }));
  }


 
  getNotaDebito(desde:any,hasta:any) {
  return this.http.post(this.url +  "notasController.php?id=getNotaDebito" , {'desde':desde , 'hasta':hasta})
  .pipe(
    map((e)=> {
      return e
    }));
}

getnotaDebitoId(idCliente:any) {
  return this.http.post(this.url +  "notasController.php?id=getnotaDebitoId" , {'idCliente':idCliente })
  .pipe(
    map((e)=> {
      return e
    }));
}



}
