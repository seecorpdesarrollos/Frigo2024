import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ProductosService} from '../../../servicios/productos.service';
import {InventarioService} from '../../../servicios/inventario.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent implements OnInit {

  constructor(
    private service:ProductosService,
    private ruta:Router,
    private servicio: InventarioService
  ) { }

  ngOnInit() {
  }


 dueHacienda:string='';
 cantCabeza:number=0;
 cantMedia:number=0;
 fechaFaena:any;
 cantKilos:number=0;
 nroTropa:any;
 spiner:boolean=false;
 agregarPro(forma:NgForm){
   this.dueHacienda = forma.value.dueHacienda;
   this.cantCabeza = forma.value.cantCabeza;
   this.cantMedia = forma.value.cantMedia;
   this.fechaFaena = forma.value.fechaFaena;
   this.cantKilos = forma.value.cantKilos;
   this.nroTropa = forma.value.nroTropa;
   if (this.cantKilos <=0 || this.cantCabeza <=0 || this.cantMedia <=0) {
       alert ('El valor tiene que ser mayor a cero');
   }else{
   
     this.spiner=true;
     this.service.addProducto(
       this.dueHacienda,
       this.cantCabeza,
       this.cantMedia,
       this.fechaFaena,
       this.cantKilos,
       this.nroTropa).subscribe(()=>{
         this.ruta.navigate(['productos/listadoPro']);
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
       
       if (res == 0) {    
           this.comprobarInv = true;
       }else{
         // alert('Error en el númeri de tropa.')
         this.comprobarInv = false;
 
       }
     })
 
 }



}
