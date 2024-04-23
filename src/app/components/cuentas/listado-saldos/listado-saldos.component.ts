import { Component, OnInit } from '@angular/core';
import { CuentasService } from '../../../servicios/cuentas.service';
import { Router } from '@angular/router';


declare var $:any;
@Component({
  selector: 'app-listado-saldos',
  templateUrl: './listado-saldos.component.html',
  styles: []
})
export class ListadoSaldosComponent implements OnInit {

  constructor(
    private servicios:CuentasService,
    private ruta:Router
  ) { }

  ngOnInit() {
    this.getSaldos();
  }




  loader:boolean = false;
  inventario:any;
  total:any=0;
   public data: any;
   public filterQuery = "";
   public rowsOnPage = 10;
  nada:boolean=false;
    getSaldos(){
     this.servicios.getSaldo()
      .subscribe(res=>{
        this.loader = true;
        this.data= res;
        console.log(this.data);
        
        if(this.data == undefined){
          this.nada= false;
        }else{
          this.nada =true;
        }
        
        for (let i = 0; i < this.data.length; i++) {
          this.data[i].saldoActual;
          this.total = this.total + parseFloat(this.data[i].saldoActual)
          // console.log(this.total);
           
         }
      })
    }


    public cli:any;
    public fecha:any;
    public vendedor:any;  
    public saldo:any;  
    imprimirIndividual(nombreCliente:any, nombreVendedor:any,saldoActual:any, fechaSaldo:any){
     
      this.cli = nombreCliente;
      this.saldo = saldoActual;
      this.vendedor = nombreVendedor;
      this.fecha = fechaSaldo;
      
      $('#individual').modal('show');
    }


    print(imprimir:any){
      // var contenido= document.getElementById(imprimir).innerHTML;
      // var contenidoOriginal= document.body.innerHTML;
      
      // document.body.innerHTML = contenido;
      
      // window.print();
      
      // document.body.innerHTML = contenidoOriginal;
      // location.reload();
     }


    print1(imprimir1:any){
      // var contenido= document.getElementById(imprimir1).innerHTML;
      // var contenidoOriginal= document.body.innerHTML;
      
      // document.body.innerHTML = contenido;
      
      // window.print();
      
      // document.body.innerHTML = contenidoOriginal;
      // location.reload();
     }
   

}
