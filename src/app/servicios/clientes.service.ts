import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable()
export class ClientesService {

  constructor( private http:HttpClient) { }

  url = environment.url;

  addCliente(nombreCliente:any,  telefonoCliente:any, direccionCliente:any) {
    return this.http.post( this.url + "clienteController.php?id=addCliente",
      {'nombreCliente': nombreCliente, 'telefonoCliente': telefonoCliente, 'direccionCliente':direccionCliente })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  addDeuda(idCliente:any,  montoDeuda:any, idVendedor:any) {
    return this.http.post( this.url + "clienteController.php?id=deudaCliente",
      {'idCliente': idCliente, 'montoDeuda': montoDeuda, 'idVendedor':idVendedor })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  vendedor:any;
    getClientes() {
    return this.http.get( this.url + "clienteController.php?id=getCli")
    .pipe(
      map((e)=> {
        return e
      }));
  }

  vendedors:any;
  getClientesTodos() {
  return this.http.get( this.url + "clienteController.php?id=getCliTodos")
  .pipe(
    map((e)=> {
      return e
    }));
}

  inactivos:any;
    getClientesInactivos() {
    return this.http.get( this.url + "clienteController.php?id=getCliInactivo")
    .pipe(
      map((e)=> {
        return e
      }));
  }




  getCli: any;
getClienteId(idCliente:number) {
 return this.http.post( this.url + "clienteController.php?id=getCliId",
  { 'idCliente': idCliente })
  .pipe(
    map((e)=> {
      return e
    }));
}


getSaldo(idCliente:number) {
 return this.http.post( this.url + "clienteController.php?id=getSaldo",
  { 'idCliente': idCliente })
  .pipe(
    map((e)=> {
      return e
    }));
}



getClienteFacturadoId(idCliente:number) {
return this.http.post( this.url + "clienteController.php?id=getClienteFacturadoId",
{ 'idCliente': idCliente })
.pipe(
  map((e)=> {
    return e
  }));
}

baja: any;
bajaClienteId(idCliente:number) {
return this.http.post( this.url + "clienteController.php?id=bajaCliente", { 'idCliente': idCliente })
.pipe(
  map((e)=> {
    return e
  }));
}

alta: any;
altaVededorId(idCliente:number) {
return this.http.post( this.url + "clienteController.php?id=altaCliente", { 'idCliente': idCliente })
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

editarCliente(nombreCliente:any,  telefonoCliente:any, direccionCliente:any ,idCliente:any) {
  return this.http.post( this.url + "clienteController.php?id=editarCli",
    {'nombreCliente': nombreCliente, 'telefonoCliente': telefonoCliente, 'direccionCliente': direccionCliente, 'idCliente':idCliente })
    .pipe(
      map((e)=> {
        return e
      }));
}


}
