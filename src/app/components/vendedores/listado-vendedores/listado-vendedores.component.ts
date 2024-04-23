import { Component, OnInit } from '@angular/core';
import {VendedoresService} from '../../../servicios/vendedores.service';
import { Router , ActivatedRoute } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-listado-vendedores',
  templateUrl: './listado-vendedores.component.html',
  styles: []
})
export class ListadoVendedoresComponent implements OnInit {

  constructor( private service:VendedoresService, private ruta:Router) { }

  ngOnInit() {
    this.getVendedores();
  }


    loader:boolean = false;
    inventario:any;
    total:any=0;
     public data: any;
     public filterQuery = "";
     public rowsOnPage = 2;
    nada:boolean=false;
      getVendedores(){
        this.service.getVendedores()
        .subscribe(res=>{
          this.loader = true;
          this.data= res;
           if(this.data == undefined){
             this.nada= false;
           }else{
             this.nada =true;
           }
        })
      }

      nombre:string='';
      id:number=0;
      bajaVendedor(idVendedor:any, nombreVendedor:any){
        this.nombre = nombreVendedor
        this.id = idVendedor
        $('#vendedor').modal('show');
      }

      eliminar(id:any){
        this.service.bajaVededorId(id)
        .subscribe(()=>{
          this.ruta.navigate(['vendedores/exitosVen/baja']);
          setTimeout(()=>{
            this.ruta.navigate(['vendedores']);

          },4000);
        })
      }

}
