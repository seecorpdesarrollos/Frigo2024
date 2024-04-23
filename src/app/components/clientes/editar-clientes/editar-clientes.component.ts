import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {ClientesService} from '../../../servicios/clientes.service';

declare var $:any;
@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styles: []
})
export class EditarClientesComponent implements OnInit {

  constructor(
    private ruta:Router,
   private parametro:ActivatedRoute,
   private servicio: ClientesService
  ) { }

  ngOnInit() {
    this.getClienteId();
  }

  loader:boolean = false;
  idCliente= this.parametro.snapshot.params['idCliente'];
  cli:any;
  getClienteId(){
       
     this.servicio.getClienteId(this.idCliente)
     .subscribe(res=>{
       this.loader = true;
       this.cli = res
        // console.log(res)
     })

  }


 nombreCliente:number=0;
 telefonoCliente:any;
 direccionCliente:any
 cambio:boolean= false;
  editarCli(forma:NgForm){
  this.cambio= true;
    this.nombreCliente = forma.value.nombreCliente;
    this.telefonoCliente = forma.value.telefonoCliente;
    this.direccionCliente = forma.value.direccionCliente;

      this.servicio.editarCliente(this.nombreCliente, this.telefonoCliente,  this.direccionCliente, this.idCliente)
      .subscribe(()=>{
        this.ruta.navigate(['clientes/exitosCli/editar']);
        setTimeout(()=>{
          this.ruta.navigate(['clientes']);

        },3000);
      })
    }


  back(){
    this.ruta.navigate(['clientes']);
  }
}
