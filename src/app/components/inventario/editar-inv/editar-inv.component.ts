import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';

declare var $:any;
@Component({
  selector: 'app-editar-inv',
  templateUrl: './editar-inv.component.html',
  styles: []
})
export class EditarInvComponent implements OnInit {

  constructor(
    private ruta:Router,
   private parametro:ActivatedRoute,
   private servicio: InventarioService
  ) { }

  ngOnInit() {
    this.getProductosId();
    
  }

  loader:boolean = false;
  idInventario= this.parametro.snapshot.params['idInventario'];
  inv:any;
  cantidad:any;
  getProductosId(){
    // $(document).ready(function(){
    //   $(window).keydown(function(event:any){
    //         if(event.keyCode == 13) {
    //             return false;
    //           }
    //   });

    // })
    this.servicio.getInventarioId(this.idInventario)
    .subscribe(res=>{
      this.loader = true;
      this.cantidad = res
      if ( this.cantidad.cantidad == 0) {
        this.loader = false;
        $('#noCantidad').modal('show');
      }else{
         this.loader = true;
          this.inv = res;
      }
    console.log(res)
    })
  }


 kiloMedia:number=0;
 tropa:any;
cambio:boolean=false;
  editarInv(forma:NgForm){

    this.kiloMedia = forma.value.kiloMedia;
    if (this.kiloMedia <=0) {
        alert('El peso de la media res tiene que ser mayor a 0');
    }else{

  this.cambio=true;
      this.tropa = forma.value.nroTropa;
      this.servicio.editarInventario(this.kiloMedia, this.tropa, this.idInventario)
      .subscribe(()=>{
        this.ruta.navigate(['inventario/exitosInv/editar']);
        setTimeout(()=>{
          this.ruta.navigate(['inventario']);

        },3000);
      })
    }

  }

comprobarInv:boolean=true;
nroTropaComprobar:string='';
comprobarInventario(forma:NgForm){

  // console.log(forma.value.nombreCategoria)
  this.nroTropaComprobar = forma.value.nroTropa
    // console.log(this.comprobarInv);
    this.servicio.comprobarInv(this.nroTropaComprobar)
    .subscribe( res =>{
      // console.log(res);
      
      if (res == 1) {    
          this.comprobarInv = true;
      }else{
        // alert('Error en el númeri de tropa.')
        this.comprobarInv = false;

      }
    })

}

  back(){
    this.ruta.navigate(['inventario']);
  }


}
