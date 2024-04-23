import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';

declare var $:any;
@Component({
  selector: 'app-inventario-cuarteo',
  templateUrl: './inventario-cuarteo.component.html',
  styles: []
})
export class InventarioCuarteoComponent implements OnInit {

  constructor(
    private service:InventarioService ,
    private ruta:Router) { }

  ngOnInit() {
    this.getCuarteo();
  }


  loader:boolean = false;
  inventario:any;
  total:any=0;
  totales:any=0;
  totalMedia:any=0;
   public data: any;
   public filterQuery = "";
   public rowsOnPage = 20;
nada:boolean=false;
menor:boolean=false;
  getCuarteo(){
    this.service.getCuarteoServicioInventario()
    .subscribe(res=>{
      this.loader= true;
      this.data = res;
      if(this.data == undefined){
        console.log(this.data)
        this.nada= false;
      }else{
        this.nada =true;
      }
    })

  }

idCuarteo:any;
cantidad:any;
  eliminar(idCuarteo:any , cantidad:any){
    this.idCuarteo = idCuarteo;
    this.cantidad = cantidad;
    if (cantidad  < 3 ) {
      $('#cuarteoVendido').modal('show');  
    }else{

      $('#eliminarCuarteo').modal('show');
    }
  }

  borrarCuarteo(idCuarteo:any){
    // alert(idCuarteo)
    this.service.borrarCuarteoId(idCuarteo)
    .subscribe(res=>{
      // console.log(res)
      this.ruta.navigate(['cuarteo/exitosCuarteo/eliminar']);
      setTimeout(()=>{
        this.ruta.navigate(['cuarteo/inventarioCuerteo']);

      },3000);
    })

  }


datos:any;
masInfo(idCuarteoInventario:any){

    this.service.masInfo(idCuarteoInventario)
    .subscribe(res=>{
      $('#mas').modal('show');
      this.datos = res;
    });

}


imprimirCuarteo(areaImprimir:any){
//   location.reload();
// var contenido= document.getElementById(areaImprimir).innerHTML;
// var contenidoOriginal= document.body.innerHTML;

// document.body.innerHTML = contenido;

// window.print();

// document.body.innerHTML = contenidoOriginal;
}

}
