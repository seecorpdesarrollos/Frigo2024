import { Component, OnInit } from '@angular/core';
import {InventarioService} from '../../../servicios/inventario.service';
import { Router } from '@angular/router';


declare var $:any;
@Component({
  selector: 'app-lista-inv',
  templateUrl: './lista-inv.component.html',
  styles: []
})
export class ListaInvComponent implements OnInit {

  constructor( private service:InventarioService, private ruta:Router) { }


    ngOnInit() {
      this.getInventario();
    }

    salir(){
      $('.mediaTropa').modal('hide');
      this.ruta.navigate(['inventario/agregarInv']);
      setTimeout(()=>{
      this.ruta.navigate(['inventario']);
       
      },300)
    }


  loader:boolean = false;
  inventario:any;
  total:any=0;
  totales:any=0;
  totalMedia:any=0;
  totalKilos:any=0;
   data: any;
datos:any;
   getTotal(){
    this.service.getTotal()
    .subscribe(data=>{ 
      this.datos = data;
      this.totales = this.datos.kilosTotales;
      this.total = this.datos.medias;
    });
   }

   datosDisponibles:any;
   getTotalDisponible(){
    this.service.getTotalDisponible()
    .subscribe(data=>{ 
      this.datosDisponibles = data;
      this.totalMedia = this.datosDisponibles.disponibles;
      this.totalKilos = this.datosDisponibles.kilos;

    });
   }

    getInventario(){
      this.getTotal();
      this.getTotalDisponible();
      this.service.getInventarioTotal(this.desde,this.hasta)
      .subscribe(res=>{
     
        this.loader = true;
        this.data= res;
        // for (let i = 0; i < this.data.length; i++) {
        //   this.totales = parseInt(this.data[i].kiloMedia) + parseInt(this.totales);

        //  if (this.data[i].cantidad != 0) {
        //    this.total = parseInt(this.data[i].kiloMedia) + parseInt(this.total);
        //  }
        //  if (this.data[i].cantidad != 0 ) {
        //      this.totalMedia = parseInt(this.data[i].cantidad) + parseInt(this.totalMedia);

        //  }

        // }
      })
    }
    filterQuery:any;

    desde=0;
    hasta=10;
    finData:boolean=false;
    madData:any;
    mas(){
      this.desde +=10;

      this.service.getInventarioTotal(this.desde,this.hasta)
      .subscribe(data=>{
        if (data == 'error') {
       return   this.finData = true;
          // console.error('fin...')
        } else {
          this.madData = data;
          this.data.push( ...this.madData);
         return this.finData=false;
        }
      })
    }


   dataTropa:any;
   tropa:any;
   totalTropa:any=0;
   totalTropaLength:any=0;
   restante:any=0;
    masInfo(nroTropa:any){
      this.loader=false;
      
      // alert('la tropas es :' + nroTropa);
      this.service.getInventarioTropa(nroTropa)
      .subscribe( resTropa=>{
       
        this.tropa = nroTropa;
        this.dataTropa= resTropa;
        for (let i = 0; i < this.dataTropa.length; i++) {
        this.restante =  this.dataTropa[i].cantMedia;
        }
         this.totalTropaLength= this.dataTropa.length;
         this.service.getTotalTropa(nroTropa)
         .subscribe(resTotal=>{
         
          this.totalTropa = resTotal;
          this.totalTropa = this.totalTropa[0].total
         });
      })
    }

    imprimir(areaImprimir:any){
      const contenido:any = document.getElementById(areaImprimir)?.innerHTML;
      const contenidoOriginal= document.body.innerHTML;
      
      
      document.body.innerHTML = contenido;
      
      window.print();
      
      document.body.innerHTML = contenidoOriginal;
      location.reload();
    }


 
    buscarMedia(action:any){
      this.loader = false;
      this.filterQuery = ''
     this.service.buscarMediaTropa(action.value)
     .subscribe(data=>{ 
      
       
        if (data != 'error') {
          this.data = data;
          this.loader = true;
        } else {
          alert('Nada para mostrar!');
          this.hasta = 10;
          this.getInventario();
        }
     });
      
    }

    select ='Seleccione una búsqueda';
}
