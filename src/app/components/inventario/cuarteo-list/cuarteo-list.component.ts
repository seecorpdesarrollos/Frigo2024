import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';


declare var $:any;
@Component({
  selector: 'app-cuarteo-list',
  templateUrl: './cuarteo-list.component.html',
  styles: []
})
export class CuarteoListComponent implements OnInit {

  constructor(
    private service:InventarioService ,
    private ruta:Router) { }

  ngOnInit() {
    this.getCuarteo();
  }


  loader:boolean = false;
  cambio:boolean = false;
  inventario:any;
  total:any=0;
  totales:any=0;
  totalMedia:any=0;
   public data: any;
   public filterQuery = "";
   public rowsOnPage = 15;
nada:boolean=false;
  getCuarteo(){
    this.service.getCuarteoServicio(this.desde,this.hasta)
    .subscribe(res=>{
      this.loader= true;
      this.data = res;
    
      if(this.data == undefined){
        this.nada= false;
      }else{
        this.nada =true;
      }
    })

  }

  select ='Seleccione una búsqueda';


  desde=0;
  hasta=10;
  finData:boolean=false;
  madData:any;
  mas(){
    this.desde +=10;

    this.service.getCuarteoServicio(this.desde,this.hasta)
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

idInventario:any;
  eliminar(idInventario:any, estadoCuarteo:any){
this.idInventario = idInventario;
if (estadoCuarteo == 0) {
    $('#cuarteos1').modal('show');
}else{

  $('#eliminarCuarteo').modal('show');
}
  }

  borrarCuarteo(idInventario:any){
    // alert(idInventario)
    this.service.borrarCuarteo(idInventario)
    .subscribe(()=>{
      this.ruta.navigate(['inventario/exitosCuarteo/eliminar']);
      setTimeout(()=>{
        this.ruta.navigate(['cuarteo/cuarteoList']);

      },100);
    })

  }


  idCuarteo:any;
 kiloMedia:any;

  addCuarteo(idCuarteo:any, kiloMedia:any , estadoCuarteo:any){
    if (estadoCuarteo == 0) {
      $('#cuarteos').modal('show');

    }else{
    
      $('#cuarteo').modal('show');
      this.idCuarteo = idCuarteo;
      this.kiloMedia = kiloMedia;
    }

  }
  pecho:any=0;
  mocho:any=0;
  parrillero:any=0;
  completos:any=0;
  largos:any=0;
  bifes:any=0;
  asado:any=0;
  totalPeso:any=0;
  agregarCuarteo(forma:NgForm){
    this.cambio = true;
   
    this.pecho = forma.value.pecho;
    this.mocho = forma.value.mocho;
    this.parrillero = forma.value.parrillero;
    this.completos = forma.value.completos;
    this.largos = forma.value.largos;
    this.bifes = forma.value.bifes;
    this.asado = forma.value.asado;

    this.totalPeso = this.pecho+ this.mocho+ this.parrillero+this.completos+this.largos+this.bifes+this.asado
    if (this.totalPeso <= this.kiloMedia - 0 &&  this.totalPeso >= this.kiloMedia -7  ) {

      this.service.addInventarioCuarteo(
        this.pecho,
        this.mocho,
        this.parrillero,
        this.completos,
        this.largos,
        this.bifes,
        this.asado,
        this.totalPeso,
        this.idCuarteo
      ).subscribe(()=>{
          $('#cuarteo').modal('hide');
        this.ruta.navigate(['cuarteo/exitosCuarteo/add']);
        setTimeout(()=>{

          this.ruta.navigate(['cuarteo/cuarteoList']);

        },3000);
      })

    }else{
        alert(this.totalPeso +   ' No Esta en el promedio fijado')
    }


  }

  buscarMedia(action:any){
    this.loader = false;
    this.filterQuery = ''
   this.service.buscarMediaTropaCuarteo(action.value)
   .subscribe(data=>{ 
    
     
      if (data != 'error') {
        this.data = data;
        this.loader = true;
      } else {
        alert('Nada para mostrar!');
        this.hasta = 10;
        this.getCuarteo();
      }
   });
    
  }


}
