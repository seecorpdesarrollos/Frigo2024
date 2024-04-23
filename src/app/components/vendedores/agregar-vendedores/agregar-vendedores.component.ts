import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {VendedoresService} from '../../../servicios/vendedores.service';


@Component({
  selector: 'app-agregar-vendedores',
  templateUrl: './agregar-vendedores.component.html',
  styles: []
})
export class AgregarVendedoresComponent implements OnInit {

  constructor(
  private servicio:VendedoresService,
  private ruta:Router
  ) { }


  ngOnInit() {
  }


  nombreVendedor:string='';
  telefonoVendedor:any;
  al:boolean=false;
  agregarVend(forma:NgForm){
    this.nombreVendedor = forma.value.nombreVendedor.trim();
    this.telefonoVendedor = forma.value.telefonoVendedor;
    if (this.nombreVendedor == "" ) {
        alert('El  campo nombre no pueden quedar vacio');
    }else{
      this.al=true;

      this.servicio.addVendedor(this.nombreVendedor, this.telefonoVendedor)
      .subscribe(()=>{

        this.ruta.navigate(['vendedores']);
      })
    }
  }

}
