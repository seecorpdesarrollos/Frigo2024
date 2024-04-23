import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductosService} from '../../../servicios/productos.service';

declare var $:any;
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: []
})
export class ListadoComponent implements OnInit {

  constructor(
    private service:ProductosService,
    private ruta:Router
  ) { }

  ngOnInit() {
    this.getProductos();
  }

  data:any;
  desde:number=0;
  hasta:number=10;
loader:boolean = false;
  getProductos(){
    this.service.getProductos(this.desde,this.hasta)
    .subscribe(res=>{
      this.loader = true;
      this.data= res;
      // console.log(res)
    })
  }


  finData:boolean=false;
  madData:any;
  mas(){
    this.desde +=10;

    this.service.getProductos(this.desde,this.hasta)
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


  idPro:any;
  borrarCat(idProductos:any){
     console.log(idProductos)
    this.idPro = idProductos
    $('#exampleModalCenter').modal({
      backdrop: false,
      keyboard: true,
      show: true
    })
    // this.service.deleteCategoria(this.idPro)
    // .subscribe(res=>{
    //   this.getProductos();
    // })

  }

  eliminar(){
    this.service.deleteCategoria(this.idPro)
    .subscribe(res=>{
      this.ruta.navigate(['productos/exitos/borrar']);
      setTimeout(()=>{
      this.ruta.navigate(['productos']);
      },3000);
      // console.log(res)
    })
  }

  inprimirTropa(impresion:any){
    // var contenido= document.getElementById(impresion).innerHTML;
    // var contenidoOriginal= document.body.innerHTML;
    
    // document.body.innerHTML = contenido;
    
    // window.print();
    
    // document.body.innerHTML = contenidoOriginal;
    // location.reload();
  }


  nrotropa:any;
  buscarT(tropa:any){
    this.data=null;
   this.service.getTropasId(tropa.value)
   .subscribe(data=>{ 
     this.data = data;
     
     if (this.data != null) {
       
   } else {
     this.nrotropa =null;
     alert('Error, no hay datos para mostrar!');
     this.service.getProductos(0,10)
     .subscribe(res=>{
       this.loader = true;
       this.data= res;
      //  console.log(res)
     })
   }
   });
    
  }

}
