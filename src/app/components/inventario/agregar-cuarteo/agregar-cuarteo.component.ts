import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router , ActivatedRoute } from '@angular/router';
import {InventarioService} from '../../../servicios/inventario.service';
import { ProductosService } from '../../../servicios/productos.service';

@Component({
  selector: 'app-agregar-cuarteo',
  templateUrl: './agregar-cuarteo.component.html',
  styles: []
})
export class AgregarCuarteoComponent implements OnInit {

  constructor(
    private service:InventarioService ,
    private ruta:Router,
  private prod:ProductosService

  ) { }


  ngOnInit() {
    // this.getInventario();
  }
  
  loader:boolean = false;
  public data: any;



  
  toggle:boolean=false;
  dataToggle(valor:any){
 
   this.getProductosTropa(valor.value);
 
  }

  nroTropas:any

  getProductosTropa(valor:any){
    this.prod.getTropasId1C(valor)
    .subscribe(res=>{
   
      if (res != 'error') {
        this.data = res
        this.toggle =true;
      }else{
        this.data = [{ nroTropa : 'No hay coincidencias '}]
      }
      // console.log(this.nroTropas);
      
    })
  }
 
  
  kiloMedia:any
  nroTropa:any
  idInventario:any
  pro:boolean = false;
  select(value:any){
    
    this.kiloMedia = value.kiloMedia;
    this.nroTropa = value.nroTropa;
    this.idInventario = value.idInventario;
    this.toggle =false;
    this.pro = true
  }
  
  
  cambio:boolean=false;
  agregarCuarteo(forma:NgForm){
    this.cambio=true;
        this.kiloMedia= forma.value.kiloMedia;
        this.nroTropa = forma.value.nroTropa;
        this.idInventario = forma.value.idInventario;
    this.service.addCuarteo(this.kiloMedia, this.nroTropa, this.idInventario)
    .subscribe(()=>{
      this.ruta.navigate(['inventario/exitosInv/add']);
      setTimeout(()=>{
        this.ruta.navigate(['cuarteo/cuarteoList']);

      },3000);
    })
  }


}
