import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../servicios/productos.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tropas',
  templateUrl: './tropas.component.html',
  styles: []
})
export class TropasComponent implements OnInit {

  constructor(
    private produ:ProductosService,
    private ruta:Router
  ) { }

  ngOnInit() {
    this.getTropa();
  }



 toggle2:boolean=false;
 dataToggle2(){
   this.toggle2 =true;
 
 }


 nroTropa:any;
 selectTropa(value:any){
  this.nroTropa = value.nroTropa;
  this.toggle2 =false;
 //  this.pro = true
}




   tro:boolean=false;
   tropa:any
   getTropa(){
    // this.produ.getProductos()
    // .subscribe(res=>{
    //   this.tropa= res;
     
    //   // console.log(this.datas)
    // })
  }

  tTropa:any;
  cambio:boolean=false;
  nada:boolean=false;
  consultarTropa(forma:NgForm){   
   this.tropa = forma.value.nroTropa;
   this.cambio = true;
       this.produ.getTropas(this.tropa)
       .subscribe(resp=>{
         this.tTropa = resp;
        //  console.log(this.tTropa);
         
         this.tro= true;
        if (this.tTropa == 'nada') {
          this.nada = true;
        }
        //  console.log(this.nada);
         
       })
  }

  nueva(){
    this.ruta.navigate(['ventas/reportes']);
    setTimeout(()=>{
      this.ruta.navigate(['ventas/reportes/reportesTropas/']);
      
  },20)
  }

}
