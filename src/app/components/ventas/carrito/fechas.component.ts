import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultasService } from '../../../servicios/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styles: []
})
export class FechasComponent implements OnInit {

  constructor(
   private consulta :ConsultasService,
   private ruta:Router
  ) { }

  ngOnInit() {
    // console.log(this.fe);
    
  }



  fecha1:any;
  fecha2:any;
  getFecha:any;
  fe:boolean=false;
  cambio:boolean=false;
  totals:number=0;
  nada:boolean=false;
  fecha(forma:NgForm){
    this.cambio = true;
   this.fecha1= forma.value.fechaInicial;
   this.fecha2 = forma.value.fechaFinal;
   if (this.fecha1 > this.fecha2) {
     alert('La fecha son erroneas')
   }else{
     
     this.consulta.getVentasFecha(this.fecha1, this.fecha2)
     .subscribe(resp=>{
      //  console.log(resp);
       if(resp == 0){
        //  alert('nada')
         this.nada = true;
       }
     this.getFecha = resp;
     for (let i = 0; i < this.getFecha.length; i++) {
      
       this.totals = this.totals + (this.getFecha[i].precio * this.getFecha[i].kilo);
     }
     this.fe = true;
    
   
     })    
   }
    

  }


  nueva(){
    this.ruta.navigate(['ventas/reportes']);
    setTimeout(()=>{
      this.ruta.navigate(['ventas/reportes/reportesFechas/']);
      
  },20)
  }

}
