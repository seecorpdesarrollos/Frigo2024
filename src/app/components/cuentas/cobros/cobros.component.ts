import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../../servicios/clientes.service';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm} from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';
import {VendedoresService} from '../../../servicios/vendedores.service';
import { CuentasService } from '../../../servicios/cuentas.service';


declare var $:any;
@Component({
  selector: 'app-cobros',
  templateUrl: './cobros.component.html',
  styles: []
})
export class CobrosComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private ruta:Router,
    private serviceInvrntario:InventarioService,
    private vendedor:VendedoresService,
    private cuentas:CuentasService
  ) { }

  ngOnInit() {
    this.getClientes();
    this.getVendedores();

  }


  
  
  toggle1:boolean=false;
  dataToggle1(){
    this.toggle1 =true;
    
  }
  
  public nombreCliente:any;
  idCliente:any
  selectCli(value:any){
    
    this.nombreCliente = value.nombreCliente;
    this.idCliente = value.idCliente;
    this.toggle1 =false;
    // this.pro = true
  }
  
  
  toggle:boolean=false;
  dataToggle(){
    this.toggle =true;
    
  }
  
  nombreVendedor:any;
  idVendedor:any
  selectVendedor(values:any){
    
    this.nombreVendedor = values.nombreVendedor;
    this.idVendedor = values.idVendedor;
    this.toggle =false;
    // this.pro = true
  }
  
  
  
  
  loader:boolean = false;
  ven:any;
  getVendedores(){
    this.vendedor.getVendedores()
    .subscribe(res=>{
      this.ven = res;
    }
    );
  }

  
  inventario:any;
  total:any=0;
   public datas: any;
   public filterQuery = "";
   public rowsOnPage = 2;
  nada:boolean=false;
    getClientes(){
      this.service.getClientesTodos()
      .subscribe(res=>{
        this.loader = true;
        this.datas= res;
        //  console.log(this.datas)
         if(this.datas == undefined){
           this.nada= false;
         }else{
           this.nada =true;
         }
      })
    }




    comprobante:any;
    monto:any;
    efectivo:number=0;
    cheque:number=0;
    nroCheque:any;
    banco:any;
    propietario:any;
    suma:number=0;
    noGeneradoPago:any;
    cambio:boolean=false;
    fechaCobro:any;
    cobro(forma:NgForm){
      this.idCliente= forma.value.idCliente;
      this.comprobante= forma.value.comprobante;
      this.monto= forma.value.monto;
      this.efectivo= forma.value.efectivo;
      this.cheque= forma.value.cheque;
      this.nroCheque= forma.value.nroCheque;
      this.banco= forma.value.banco;
      this.propietario= forma.value.propietario;
      this.idVendedor= forma.value.idVendedor;
      this.fechaCobro= forma.value.fechaCobro;
      
      this.suma = this.efectivo + this.cheque;
      if( this.monto != this.suma){
        alert(' Los importes estan equivocado..')
      }else{
        
        this.cuentas.addPagos(
          this.idCliente,
          this.comprobante,
          this.monto,
          this.efectivo,
          this.cheque,
          this.nroCheque,
          this.banco,
          this.propietario,  
          this.idVendedor,
          this.fechaCobro
        )
        .subscribe(res=>{
          
          this.noGeneradoPago = res;
          if(this.noGeneradoPago == 'noCliente'){
            $('#noGeneradoPago').modal('show');
          }else{
            this.cambio = true;
            
            setTimeout(()=>{

              this.ruta.navigate(['cuentas']);
            }, 2000)
          }
          
          
        })
      }
      
    }
    
    
    // cobros(forma:NgForm){
      
      //   this.idCliente= forma.value.idCliente;
    //   this.comprobante= forma.value.comprobante;
    //   this.monto= forma.value.monto;
    //   this.efectivo= forma.value.efectivo;
    //   this.cheque= forma.value.cheque;
    //   this.nroCheque= forma.value.nroCheque;
    //   this.banco= forma.value.banco;
    //   this.propietario= forma.value.propietario;
   
    //    this.suma = this.efectivo + this.cheque;
    //   if( this.monto != this.suma){
    //    alert('Los importes  estan equivocado..')
    //   }else{

    //       this.cuentas.addPagoss(
    //         this.idCliente,
    //         this.comprobante,
    //       this.monto,
    //       this.efectivo,
    //       this.cheque,
    //       this.nroCheque,
    //       this.banco,
    //       this.propietario,  
    //       )
    //       .subscribe(res=>{
   
    //         this.noGeneradoPago = res;
    //         if(this.noGeneradoPago == 'noCliente'){
    //           $('#noGeneradoPago').modal('show');
    //         }else{
    //           $('#largo').modal('hide');
    //           this.ruta.navigate(['cuentas/listadoSaldos']);
    //         }
            
            
    //       })
    //   }

    // }



    pagoSaldo(){
        $('#noGeneradoPago').modal('hide');
        $('#largo').modal('show');
        
    }




}
