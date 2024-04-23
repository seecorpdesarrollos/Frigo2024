import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {VendedoresService} from '../../../servicios/vendedores.service';


declare var $:any;
@Component({
  selector: 'app-editar-vendedores',
  templateUrl: './editar-vendedores.component.html',
  styles: []
})
export class EditarVendedoresComponent implements OnInit {

  constructor(
    private ruta:Router,
   private parametro:ActivatedRoute,
   private servicio: VendedoresService
  ) { }

  ngOnInit() {
    this.getVendedorId();
  }

  loader:boolean = false;
  idVendedor= this.parametro.snapshot.params['idVendedor'];
  ven:any;
  getVendedorId(){
        // $(window).keydown(function(event:any){
        //       if(event.keyCode == 13) {
        //           return false;
        //         }
        // });
    this.servicio.getVededorId(this.idVendedor)
    .subscribe(respuesta=>{
      this.loader = true;
         return this.ven = respuesta;
    })
  }


 nombreVendedor:number=0;
 telefonoVendedor:any;
  editarVen(forma:NgForm){
     this.nombreVendedor = forma.value.nombreVendedor;
      this.telefonoVendedor = forma.value.telefonoVendedor;
      this.servicio.editarVendedor(this.nombreVendedor, this.telefonoVendedor, this.idVendedor)
      .subscribe( res=>{
        console.log(res)
        if (res == "success") {
          this.ruta.navigate(['vendedores/exitosVen/editar']);
          setTimeout(()=>{
            this.ruta.navigate(['vendedores']);

          },3000);
        }else{
          this.ruta.navigate(['vendedores/exitosVen/error']);
          setTimeout(()=>{
            this.ruta.navigate(['vendedores']);

          },8000);
        }
      })

  }

comprobarVen:boolean = false;
vendedorComprobar:string='';
comprobarVendedor(forma:NgForm){

  this.vendedorComprobar = forma.value.nombreVendedor
    // console.log(this.vendedorComprobar);
    this.servicio.comprobarVen(this.vendedorComprobar)
    .subscribe( res =>{
      if (res == 1) {
          this.comprobarVen = true;
      }else{
        this.comprobarVen = false;

      }
    })

}

  back(){
    this.ruta.navigate(['vendedores']);
  }

}
