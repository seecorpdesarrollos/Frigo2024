import { Component, OnInit, ViewChild, ElementRef   } from '@angular/core';
import { Router } from '@angular/router';
import {InventarioService} from '../../../servicios/inventario.service';

import { ClientesService } from '../../../servicios/clientes.service';

declare var $:any;
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./factura.css']
})
export class FacturasComponent implements OnInit {

  constructor(
    private service:InventarioService,
    private serviceCli:ClientesService,
    private ruta:Router) {

     }

     nombreAdmin:any;
  ngOnInit() {
    this.nombreAdmin = localStorage.getItem('nombreAdmin');
    this.getFacturado();
  }

  public data: any;
  public filterQuery = "";
  public rowsOnPage = 2;
loader:boolean = false;
 nro:any


 hasta=10;
 desde=0;
  getFacturado(){
    this.service.getFacturas(this.desde , this.hasta)
    .subscribe(res=>{
      this.loader = true;
      this.data= res;
      // this.nro = res[0].nroFactura;
      console.log(res);
      
    
    })
  }

  finData:boolean=false;
  madData:any;
  mas(){
    this.hasta +=10;

    this.service.getFacturas(this.desde,this.hasta)
    .subscribe(data=>{
      if (data == 'error') {
     return   this.finData = true;
      } else {
        this.madData = data;
        this.data.push( ...this.madData);
       return this.finData=false;
      }
    })
  }

  

  factura:any;
  todoData:any;
  nombreCliente:any
  direccionCliente:any
  telefonoCliente:any
  fecha:any;
  totalVenta:any
  sum:number=0;
  facturar(nroFactura:any ,nombreCliente:any,direccionCliente:any,telefonoCliente:any , fecha:any, totalVenta:any){
    this.factura = nroFactura;
    this.nombreCliente = nombreCliente;
    this.direccionCliente = direccionCliente;
    this.telefonoCliente = telefonoCliente;
    this.fecha = fecha;
    this.totalVenta = totalVenta;
    this.sum = 0;
   $('#factura').modal('show');
    this.service.getDetalles(nroFactura)
    .subscribe(res=>{
      this.todoData = res;
      for (let i = 0; i < this.todoData.length; i++) {
        
        const element = this.todoData[i].precio * this.todoData[i].kilo;
        this.sum = this.sum + element
        
      }
      // console.log(res)
      // console.log(this.factura)
    })
  }

  inprimirFactura(facturas:any){
    const contenido:any = document.getElementById(facturas)?.innerHTML;
    const contenidoOriginal= document.body.innerHTML;
    
    
    document.body.innerHTML = contenido;
    
    window.print();
    
    document.body.innerHTML = contenidoOriginal;
    location.reload();

    
  }

  buscarF(factu:any){
    this.service.getFacturaId(factu.value)
    .subscribe(data=>{ 
      console.log(data);
      
      if (data == 'error') {
        // this.filterQuery=null;
        this.hasta = 10;
        this.getFacturado();
      } else {
        this.data = data;
        // console.log(this.data);
        
      }
    });
    
  }

  reset(){
    this.nombreCliente=null;
    this.filterQuery = '';
    this.hasta = 10;
    this.getFacturado();
  }

  toggle1:boolean=false;
  dataToggle1(){
    this.toggle1 =true;

    this.getClientes();
  
  }

  datas:any;

  nada:boolean=false;
    getClientes(){
      this.serviceCli.getClientes()
      .subscribe(res=>{
        this.datas= res;
        // console.log(this.datas)
      })
    }

    // nombreCliente:any;
    idCliente:any
     selectCli(value:any){
    
       this.nombreCliente = value.nombreCliente;
       this.idCliente = value.idCliente;
       this.toggle1 =false;

       this.service.getFacturaIdCli(this.idCliente)
       .subscribe(data=>{ 
       
         if (data == 'error') {
           // this.filterQuery=null;
           this.desde = 10;
           this.getFacturado();
         } else {
           this.data = data;
           // console.log(this.data);
           
         }
       });
       
      //  this.pro = true
     }



  }
