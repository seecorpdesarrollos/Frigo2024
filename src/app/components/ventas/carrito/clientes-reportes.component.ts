import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../../servicios/clientes.service';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';
import { ConsultasService } from '../../../servicios/consultas.service';
import { ProductosService } from '../../../servicios/productos.service';



@Component({
  selector: 'app-clientes-reportes',
  templateUrl: './clientes-reportes.component.html',
  styles: []
})
export class ClientesReportesComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private serviceInv:InventarioService,
    private ruta:Router,
    private consulta:ConsultasService,
    private produ:ProductosService
  ) { }

  ngOnInit() {

    this.getClientes();
  }

  toggle1:boolean=false;
  dataToggle1(){
    this.toggle1 =true;
  
  }


  pro:boolean=false;
  nombreCliente:any="";
  public idCliente:any="";
  selectCli(value:any){
 
    this.nombreCliente = value.nombreCliente;
    this.idCliente = value.idCliente;
    this.toggle1 =false;
    //  this.pro = true
  }


 loader:boolean = false;
 inventario:any;
   datas:any;
   getClientes(){
     this.service.getClientesTodos()
     .subscribe(res=>{
       this.datas= res;
       // console.log(this.datas)
     })
   }


public data: any=[];
public filterQuery = "";
public rowsOnPage = 10;
nada:boolean=false;
cambio:boolean=false;
public total:number=0;
cant:any;
vender(forma:NgForm){
  this.cambio= true;
  console.log(this.idCliente);
  
  this.consulta.getVentas(this.idCliente)
  .subscribe(res=>{

    
    this.pro = true;
    this.data= res;
    this.cant = this.data.length

    for (let i = 0; i < this.data.length; i++) {
      
      this.total = this.total + (this.data[i].precio * this.data[i].kilo);
    }
   //  console.log(this.data);
   if(this.data == undefined){
     this.nada= false;
   }else{
     this.nada =true;
   }
    
  })
}

nueva(){
 this.ruta.navigate(['ventas/reportesFechas/']);
  setTimeout(()=>{
 this.ruta.navigate(['ventas/reportes']);
    
  },20)
}
 


print(imprimir:any){
  const contenido:any = document.getElementById(imprimir)?.innerHTML;
  const contenidoOriginal= document.body.innerHTML;
  
  
  document.body.innerHTML = contenido;
  
  window.print();
  
  document.body.innerHTML = contenidoOriginal;
  location.reload();
 }

}
