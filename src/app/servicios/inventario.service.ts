import { Injectable } from '@angular/core';
import {map} from "rxjs/operators";
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InventarioService {

  constructor( private http:HttpClient) { }
  url = environment.url;

  addInventarioCuarteo(pecho:any,  mocho:any , parrillero:any, completos:any , largos:any, bifes:any, asado:any,totalPeso:any, idCuarteo:any) {
    return this.http.post( this.url + "inventarioController.php?id=addInventarioCuarteo",
      {'pecho': pecho, 'mocho': mocho, 'parrillero':parrillero, 'completos':completos, 'largos':largos, 'bifes':bifes, 'asado':asado , 'totalPeso':totalPeso , 'idCuarteo':idCuarteo })
     .pipe(
      map((e)=> {  
        return e
      }));
  }

  addInventario(kiloMedia:any,  nroTropa:any) {
    return this.http.post( this.url + "inventarioController.php?id=addInventario",
      {'kiloMedia': kiloMedia, 'nroTropa': nroTropa })
     .pipe(
      map((e)=> {  
        return e
      }));
  }

  addCuarteo(kiloMedia:any,  nroTropa:any ,idInventario:any) {
    return this.http.post( this.url + "inventarioController.php?id=addCuarteo",
      {'kiloMedia': kiloMedia, 'nroTropa': nroTropa , 'idInventario': idInventario })
     .pipe(
      map((e)=> {  
        return e
      }));
  }

  inventario:any;
    getInventario() {
    return this.http.get( this.url + "inventarioController.php?id=getInv")
    .pipe(
      map((e)=> {
        return e
      }));
  }

    getCuarteoServicio(desde:any,hasta:any) {
    return this.http.post( this.url + "inventarioController.php?id=cuarteo" , {'desde':desde , 'hasta':hasta})
    .pipe(
      map((e)=> {
        return e
      }));
  }

  cuarteoInventario:any;
    getCuarteoServicioInventario() {
    return this.http.get( this.url + "inventarioController.php?id=cuarteoInventario")
    .pipe(
      map((e)=> {
        return e
      }));
  }


    getInventarioTotal(desde:any,hasta:any) {
    return this.http.post( this.url + "inventarioController.php?id=getInvTotal" , {'desde':desde , 'hasta':hasta})
    .pipe(
      map((e)=> {
        return e
      }));
  }

  inventarioTropa:any;
    getInventarioTropa(nroTropa:any) {
    return this.http.post( this.url + "inventarioController.php?id=getInvTropa",
      { 'nroTropa' :nroTropa })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  masinfo:any;
    masInfo(idCuarteoInventario:number) {
    return this.http.post( this.url + "inventarioController.php?id=idCuarteoInventario",
      { 'idCuarteoInventario' :idCuarteoInventario })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  borrar:any;
    borrarCuarteo(idInventario:number) {
    return this.http.post( this.url + "inventarioController.php?id=borrarCuarteo",
      { 'idInventario' :idInventario })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  borrarCua:any;
    borrarCuarteoId(idCuarteo:number) {
    return this.http.post( this.url + "inventarioController.php?id=borrarCuarteoId",
      { 'idCuarteo' :idCuarteo })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  totalKilos:any;
    getTotalTropa(nroTropa:number) {
      return this.http.post( this.url + "inventarioController.php?id=getInvTropaKilos",
      { 'nroTropa' :nroTropa })
      .pipe(
        map((e)=> {
          return e
        }));
  }

  getInv: any;
getInventarioId(idInventario:any) {
 return this.http.post( this.url + "inventarioController.php?id=editarInvId", { 'idInventario': idInventario })
 .pipe(
  map((e)=> {
    return e
  }));
}
resultados: any;
comprobarInv(nroTropaComprobar:any){
  return this.http.post( this.url + "inventarioController.php?id=comprobar",
  {'nroTropaComprobar':nroTropaComprobar})
  .pipe(
    map((e)=> {
      return e
    }));

}

editarInventario(kiloMedia:any,  nroTropa:any ,idInventario:any) {
  return this.http.post( this.url + "inventarioController.php?id=editarInventario",
    {'kiloMedia': kiloMedia, 'nroTropa': nroTropa, 'idInventario':idInventario })
   .pipe(
      map((e)=> {  
        return e
      }));
}


temporal(pesoCuarto:any,idCuarto:any,descripcion:any,precio:any) {
  return this.http.post( this.url + "inventarioController.php?id=temporal",
    {'pesoCuarto': pesoCuarto, 'idCuarto': idCuarto, 'descripcion':descripcion, 'precio':precio })
   .pipe(
      map((e)=> {  
        return e
      }));
}

temporal1(medias:any, nroTropa:any, precio:any, idInventario:any) {
  return this.http.post( this.url + "inventarioController.php?id=temporal1",
    {'medias': medias, 'nroTropa':nroTropa , 'precio': precio, 'idInventario':idInventario })
   .pipe(
      map((e)=> {  
        return e
      }));
}


temp:any;
  getTemp() {
  return this.http.get( this.url + "inventarioController.php?id=getTemp")
  .pipe(
    map((e)=> {
      return e
    }));
}


temp1:any;
  getTemp1() {
  return this.http.get( this.url + "inventarioController.php?id=getTemp1")
  .pipe(
    map((e)=> {
      return e
    }));
}



total:any;
  getTotalTemp() {
  return this.http.get( this.url + "inventarioController.php?id=getTotalTemp")
  .pipe(
    map((e)=> {
      return e
    }));
}

total1:any;
  getTotalTemp1() {
  return this.http.get( this.url + "inventarioController.php?id=getTotalTemp1")
  .pipe(
    map((e)=> {
      return e
    }));
}

borra:any;
  borrarTempId(idTemp:any ,descripcion:any,peso:any,  id:any) {
  return this.http.post( this.url + "inventarioController.php?id=borrarTemp",
    { 'idTemp' :idTemp , 'descripcion' :descripcion , 'peso': peso,  'id' :id })
    .pipe(
      map((e)=> {
        return e
      }));
}

borra1:any;
  borrarTempId1(idInventario:number) {
  return this.http.post( this.url + "inventarioController.php?id=borrarTemp1",
    { 'idInventario' :idInventario  })
    .pipe(
      map((e)=> {
        return e
      }));
}

factura:any
getFactura() {
return this.http.get( this.url + "inventarioController.php?id=getFactura")
.pipe(
  map((e)=> {
    return e
  }));
}



  venta(idCliente:any , nroFactura:any, total:any, idAdmin:any, fechaVenta:any) {
  return this.http.post( this.url + "inventarioController.php?id=ventas",
    { 'idCliente' :idCliente , 'nroFactura' : nroFactura, 'total':total , 'idAdmin':idAdmin, 'fechaVenta':fechaVenta })
    .pipe(
      map((e)=> {
        return e
      }));
}


facturas:any
getFacturas(desde:any,hasta:any) {
return this.http.post( this.url + "inventarioController.php?id=getFacturas" , {'desde':desde, 'hasta':hasta})
.pipe(
  map((e)=> {
    return e
  }));
}


getDet:any;
getDetalles(nroFactura:number){
  return this.http.post( this.url + "inventarioController.php?id=getDetalles",
    { 'nroFactura' : nroFactura })
    .pipe(
      map((e)=> {
        return e
      }));
}


buscarMediaTropa(data:any) {
  return this.http.post( this.url + "inventarioController.php?id=buscarMediaTropa" , data)
  .pipe(
    map((e)=> {
      return e
    }));
}


buscarMediaTropaCuarteo(data:any) {
  return this.http.post( this.url + "inventarioController.php?id=buscarMediaTropaCuarteo" , data)
  .pipe(
    map((e)=> {
      return e
    }));
}

getFacturaId(factu:any){
  return this.http.post( this.url +  "inventarioController.php?id=getFacturaId", { 'factu': factu })
  .pipe(
    map((e)=> {
    
      return e
    }));
}

getFacturaIdCli(idCliente:number){
  return this.http.post( this.url +  "inventarioController.php?id=getFacturaIdCli", { 'idCliente': idCliente })
  .pipe(
    map((e)=> {
    
      return e
    }));
}





}
