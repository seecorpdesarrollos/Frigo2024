import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentasService } from '../../../servicios/cuentas.service';

@Component({
  selector: 'app-lista-pagos',
  templateUrl: './lista-pagos.component.html',
  styles: []
})
export class ListaPagosComponent implements OnInit {

  constructor(
    private servicios: CuentasService,
    private ruta:Router
  ) { }

  ngOnInit() {
    this.getPagos();
  }




  loader:boolean = false;
  inventario:any;
  total:any=0;
   public data: any;
   public filterQuery = "";
   public rowsOnPage = 2;
  nada:boolean=false;
    getPagos(){
     this.servicios.getPagos()
      .subscribe(res=>{
        this.loader = true;
        this.data= res;
        // console.log(this.data);
        
        if(this.data == undefined){
          this.nada= false;
        }else{
          this.nada =true;
        }
        
        for (let i = 0; i < this.data.length; i++) {
          this.data[i].monto;
          this.total = this.total + parseFloat(this.data[i].monto)
          // console.log(this.total);
           
         }
      })
    }



     print(imprimir:any){
    //   var contenido= document.getElementById(imprimir).innerHTML;
    //   var contenidoOriginal= document.body.innerHTML;
      
    //   document.body.innerHTML = contenido;
      
    //   window.print();
      
    //   document.body.innerHTML = contenidoOriginal;
    //   location.reload();
      }
   

}
