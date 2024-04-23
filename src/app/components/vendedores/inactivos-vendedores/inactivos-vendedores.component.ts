import { Component, OnInit } from '@angular/core';
import {VendedoresService} from '../../../servicios/vendedores.service';
import { Router , ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-inactivos-vendedores',
  templateUrl: './inactivos-vendedores.component.html',
  styles: []
})
export class InactivosVendedoresComponent implements OnInit {

  constructor(private service:VendedoresService, private ruta:Router) { }

  ngOnInit() {
    this.getVendedoresInactivos();
  }


    loader:boolean = false;
    inventario:any;
    total:any=0;
     public data: any;
     public filterQuery = "";
     public rowsOnPage = 2;
  nada:boolean=false;
      getVendedoresInactivos(){
        this.service.getVendedoresInactivos()
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
      altaVendedor(idVendedor:any, nombreVendedor:any){
        this.nombre = nombreVendedor
        this.id = idVendedor
        $('#vendedor').modal('show');
      }

      alta(id:any){
        this.service.altaVededorId(id)
        .subscribe(()=>{
          this.ruta.navigate(['vendedores/exitosVen/alta']);
          setTimeout(()=>{
            this.ruta.navigate(['vendedores']);

          },4000);
        })
      }
}
