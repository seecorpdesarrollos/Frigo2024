import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class ConsultasService {

  constructor(
    private http:HttpClient
  ) { }

  url = environment.url;
  getCli: any;
  getVentas(idCliente:number) {
   return this.http.post(this.url +  "reportesController.php?id=mediasVendidas", 
   { 'idCliente': idCliente })
   .pipe(
    map((e)=> {
      
      return e
    }));
  }

  fe: any;
  getVentasFecha(fecha1:any, fecha2:any) {
   return this.http.post(this.url +  "reportesController.php?id=mediasVendidasFecha", 
   { 'fecha1': fecha1 , 'fecha2': fecha2 })
   .pipe(
    map((e)=> {
      return e
    }));
  }

}
