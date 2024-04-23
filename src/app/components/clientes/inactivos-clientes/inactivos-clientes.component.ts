import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../../servicios/clientes.service';
import { Router , ActivatedRoute } from '@angular/router';
declare var $:any;

@Component({
  selector: 'app-inactivos-clientes',
  templateUrl: './inactivos-clientes.component.html',
  styles: []
})
export class InactivosClientesComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private ruta:Router
  ) { }


    ngOnInit() {
      this.getClientesInactivos();
    }


      loader:boolean = false;
      inventario:any;
      total:any=0;
       public data: any;
       public filterQuery = "";
       public rowsOnPage = 2;
    nada:boolean=false;
        getClientesInactivos(){
          this.service.getClientesInactivos()
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
        altaCliente(idVendedor:any, nombreVendedor:any){
          this.nombre = nombreVendedor
          this.id = idVendedor
          $('#clienteAlta').modal('show');
        }

        alta(id:any){
          this.service.altaVededorId(id)
          .subscribe(()=>{
            this.ruta.navigate(['clientes/exitosCli/alta']);
            setTimeout(()=>{
              this.ruta.navigate(['clientes']);

            },4000);
          })
        }

}
