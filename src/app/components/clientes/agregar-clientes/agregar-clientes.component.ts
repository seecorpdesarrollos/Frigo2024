import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {ClientesService} from '../../../servicios/clientes.service';



@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styles: []
})
export class AgregarClientesComponent implements OnInit {

  constructor(
    private servicio:ClientesService,
    private ruta:Router
  ) { }

  ngOnInit() {
  }

  nombreCliente:string='';
  telefonoCliente:any;
  direccionCliente:any;
  cambio:boolean = false;
  agregarCli(forma:NgForm){
    this.cambio = true;
    this.nombreCliente = forma.value.nombreCliente.trim();
    this.telefonoCliente = forma.value.telefonoCliente;
    this.direccionCliente = forma.value.direccionCliente;
    if (this.nombreCliente == "" ) {
        alert('El  campo nombre no pueden quedar vacio');
    }else{

      this.servicio.addCliente(this.nombreCliente, this.telefonoCliente, this.direccionCliente)
      .subscribe(()=>{
       this.ruta.navigate(['clientes']);

      })
    }
  }

}
