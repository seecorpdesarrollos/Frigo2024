import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../../servicios/clientes.service';
import { Router , ActivatedRoute } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styles: []
})
export class ListadoClientesComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private ruta:Router
  ) { }

  ngOnInit() {
    this.getClientes();
  }


    loader:boolean = false;
    inventario:any;
    total:any=0;
     public data: any;
     public filterQuery = "";
     public rowsOnPage = 2;
    nada:boolean=false;
      getClientes(){
        this.service.getClientes()
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
      id:number=0
      bajaCliente(idCliente:any, nombreCliente:any){
        this.nombre = nombreCliente
        this.id = idCliente
        $('#cliente').modal('show');
      }

      eliminarCli(id:any){
        this.service.bajaClienteId(id)
        .subscribe(()=>{
          this.ruta.navigate(['clientes/exitosCli/baja']);
          setTimeout(()=>{
            this.ruta.navigate(['clientes']);

          },4000);
        })
      }

}
