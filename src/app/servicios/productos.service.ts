import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class ProductosService {

  constructor(private http:HttpClient) { }
  url = environment.url;
  addProducto(dueHacienda:any,cantCabeza:any,cantMedia:any,fechaFaena:any,cantKilos:any,  nroTropa:any) {
    return this.http.post( this.url +  "productosControllers.php?id=add",
      {'dueHacienda': dueHacienda, 'cantCabeza': cantCabeza,
      'cantMedia': cantMedia, 'fechaFaena': fechaFaena,
      'cantKilos': cantKilos, 'nroTropa': nroTropa })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  editProducto(dueHacienda:any,cantCabeza:any,cantMedia:any,fechaFaena:any,cantKilos:any,  nroTropa:any ,idProductos:any) {
    return this.http.post( this.url +  "productosControllers.php?id=edit",
      {'dueHacienda': dueHacienda, 'cantCabeza': cantCabeza,
      'cantMedia': cantMedia, 'fechaFaena': fechaFaena,
      'cantKilos': cantKilos, 'nroTropa': nroTropa , 'idProductos':idProductos })
      .pipe(
        map((e)=> {
          return e
        }));
  }



  getProductos(desde:any,hasta:any) {
  return this.http.post( this.url + "productosControllers.php?id=getProd" , {'desde' : desde , 'hasta' : hasta})
  .pipe(
    map((e)=> {
    
      return e
    }));
}

deleteCategoria(idProductos:any){
    return this.http.post( this.url +  "productosControllers.php?id=delete", { 'idProductos': idProductos })
    .pipe(
      map((e)=> {
      
        return e
      }));
  }

  getPros: any;
getProductosId(idProductos:any) {
 return this.http.post( this.url +  "productosControllers.php?id=editarProdId", 
 { 'idProductos': idProductos })
 .pipe(
  map((e)=> {
    return e
  }));
}


getTropa: any;
getTropas(nroTropa:any) {
 return this.http.post( this.url +  "reportesController.php?id=getTropa", 
 { 'nroTropa': nroTropa })
 .pipe(
  map((e)=> {
    return e
  }));
}

getTropasId(nTropa:any){
  return this.http.post( this.url +  "productosControllers.php?id=getTropasId", { 'nTropa': nTropa })
  .pipe(
    map((e)=> {
    
      return e
    }));
}

getTropasId1(nTropa:any){
  return this.http.post( this.url +  "productosControllers.php?id=getTropasId1", { 'nTropa': nTropa })
  .pipe(
    map((e)=> {
    
      return e
    }));
}

getTropasId1C(kiloMedia:any){
  return this.http.post( this.url +  "productosControllers.php?id=getTropasId1C", { 'kiloMedia': kiloMedia })
  .pipe(
    map((e)=> {
    
      return e
    }));
}







}
