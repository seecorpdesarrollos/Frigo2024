import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ProductosService} from '../../../servicios/productos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styles: []
})
export class EditarComponent implements OnInit {

  constructor(
    private ruta:Router,
   private parametro:ActivatedRoute,
   private servicio: ProductosService
  ) { }

  ngOnInit() {
    this.getProductosId();
  }

  loader:boolean = false;
  idProductos= this.parametro.snapshot.params['idProductos'];
  pro:any;
  getProductosId(){
    this.servicio.getProductosId(this.idProductos)
    .subscribe(respuesta=>{
      this.loader = true;
    return  this.pro = respuesta;
    })
  }


  dueHacienda:string='';
  cantCabeza:number=0;
  cantMedia:number=0;
  fechaFaena:any;
  cantKilos:number=0;
  nroTropa:any;
  spinner:boolean=false;
  editarPro(forma:NgForm){

    this.dueHacienda = forma.value.dueHacienda;
    this.cantCabeza = forma.value.cantCabeza;
    this.cantMedia = forma.value.cantMedia;
    this.fechaFaena = forma.value.fechaFaena;
    this.cantKilos = forma.value.cantKilos;
    this.nroTropa = forma.value.nroTropa;

    if (this.cantKilos <=0 || this.cantCabeza <=0 || this.cantMedia <=0) {
        alert ('El valor tiene que ser mayor a cero');
    }else{
      this.spinner = true;
    this.servicio.editProducto(
    this.dueHacienda,
    this.cantCabeza,
    this.cantMedia,
    this.fechaFaena,
    this.cantKilos,
    this.nroTropa,
    this.idProductos).subscribe(()=>{
      this.ruta.navigate(['productos/exitos/editar']);
      setTimeout(()=>{
        this.ruta.navigate(['productos']);
      },3000)

   })
}
  }

  back(){
    this.ruta.navigate(['./productos']);
  }
}
