import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {InventarioService} from '../../../servicios/inventario.service';
import { ProductosService } from '../../../servicios/productos.service';

declare var $:any;

@Component({
  selector: 'app-agregar-inv',
  templateUrl: './agregar-inv.component.html',
  styles: []
})
export class AgregarInvComponent implements OnInit {

  constructor(
  private servicio:InventarioService,
  private ruta:Router,
  private prod:ProductosService
  ) {
   }

  ngOnInit() {
    this.noEnter();
    // this.getProductosTropa();
  }
  noEnter(){
    // $(document).ready(function(){
    //   $(window).keydown(()(event:any){
    //     if(event.keyCode == 13) {
    //       return false;
    //     }
    //   });

    // })

  }

  kiloMedia:number=0;
  public nroTropa:any;
  agregarInv(){
      
    // this.kiloMedia = forma.value.kiloMedia;
    // this.nroTropa = forma.value.nroTropa;
    // if (this.kiloMedia <=0 || this.nroTropa <=0) {
    //     alert('El valor tiene que ser mayor a 0');
    // }else{

    //   this.servicio.addInventario(this.kiloMedia, this.nroTropa)
    //   .subscribe(res=>{

    //      if(res == 'no'){
    //       $('#noMedias').modal('show');
    //      }else{

    //        this.ruta.navigate(['inventario']);
    //      }
    //   })
    // }
  }


  comprobarInv:boolean = true;
  nroTropaComprobar:any;
  loader:boolean=false;
  comprobarInventario(forma:NgForm){
    this.loader = true;
    // this.toggle =true;
    // console.log(forma.value.nombreCategoria)
    this.nroTropaComprobar =forma.value.nroTropa;
        // console.log(this.nroTropaComprobar);
      this.servicio.comprobarInv(this.nroTropaComprobar)
      .subscribe( res =>{
        //  console.log(res);
        
        if (res == 1) {
            this.comprobarInv = true;
            this.toggle =false;
            this.kiloMedia = forma.value.kiloMedia;
            this.nroTropa = forma.value.nroTropa;
            if (this.kiloMedia <=0 || this.nroTropa <=0) {
                alert('El valor tiene que ser mayor a 0');
            }else{
        
              this.servicio.addInventario(this.kiloMedia, this.nroTropa)
              .subscribe(res=>{
        
                 if(res == 'no'){
                  $('#noMedias').modal('show');
                 }else{
        
                   this.ruta.navigate(['inventario']);
                 }
              })
            }
        }else{
          this.comprobarInv = false;
          this.loader = false;
          this.toggle =false;
        }
      })

  }

  reset(){
    this.ruta.navigate(['inventario'])
    setTimeout(()=>{
    this.ruta.navigate(['inventario/agregarInv'])
      
    },20);
  }


  toggle:boolean=false;
 dataToggle(valor:any){

  this.getProductosTropa(valor.value);

 }




 pro:boolean = false;
 select(value:any){
   this.nroTropa = value.nroTropa;
   this.toggle =false;
   this.pro = true;
    
 }

 desde:number =0;
 hasta:number =10;
  nroTropas:any
  getProductosTropa(valor:any){
    this.prod.getTropasId1(valor)
    .subscribe(res=>{
    
      if (res != 'error') {
        this.nroTropas = res
        this.toggle =true;
      }else{
        this.nroTropas = [{ nroTropa : 'No hay coincidencias '}]
      }
      // console.log(this.nroTropas);
      
    })
  }


}
