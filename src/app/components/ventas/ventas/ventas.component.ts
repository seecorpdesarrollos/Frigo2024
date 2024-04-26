import { Component, OnInit } from '@angular/core';
import {ClientesService} from '../../../servicios/clientes.service';
import { Router , ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import {InventarioService} from '../../../servicios/inventario.service';
import { FechasComponent } from '../carrito/fechas.component';
import { ProductosService } from '../../../servicios/productos.service';

declare var $:any;

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styles: []
})
export class VentasVComponent implements OnInit {

  constructor(
    private service:ClientesService,
    private serviceInv:InventarioService,
    private prod:ProductosService,
    private ruta:Router
  ) {

  }

  ngOnInit() {

    this.getClientes();
    this.getInventario();
    this.getTemp();
    this.getInventarioCuarteo();
    this.getTotalTemp();
    this.getTotalTemp1();
    this.getTemp1();
    this.getFactura();
    this.da();

  }

  toggle:boolean=false;
  dataToggle(valor:any){
 
   this.getProductosTropa(valor.value);
 
  }
 toggle1:boolean=false;
dataToggle1(){
  this.toggle1 =true;

}

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
    // console.log(this.nroTropa);
   
 }


nombreCliente:any;
idCliente:any
 selectCli(value:any){

   this.nombreCliente = value.nombreCliente;
   this.idCliente = value.idCliente;
   this.toggle1 =false;
   this.pro = true
 }


  data:any
  getInventario(){
    this.serviceInv.getInventario()
    .subscribe(res=>{
      // this.loader = true;
      this.data= res;
      // console.log(this.data);
      

    })
  }

  flag:boolean  =false;
  flag1:boolean  =false;


  media(){
    this.flag = true;
    this.flag1 = false;
  }

  cuarteo(){
    this.flag1 = true;
    this.flag = false;
  }


  datos:any
  descripcions:any
  getInventarioCuarteo(){
    this.serviceInv.getCuarteoServicioInventario()
    .subscribe(res=>{

      // this.loader = true;
      this.datos= res;

       // console.log(this.datos)

      this.descripcions= 'dvdcd';
    })
  }


    loader:boolean = false;
    inventario:any;
    total:any=0;
      datas:any;

    nada:boolean=false;
      getClientes(){
        this.service.getClientes()
        .subscribe(res=>{
          this.datas= res;
          // console.log(this.datas)
        })
      }



      medias:any;
      cuarto?:any;
      idCuarto:any
      pesoCuarto:any
      descripcion:any
      precio:any
      cambio:boolean=false;
      temp(forma:NgForm){
       this.cambio = true;
        this.medias = forma.value.kiloMedia;
        this.precio = forma.value.precio;
        this.idInventario = forma.value.idInventario;

        this.serviceInv.temporal1(this.medias,this.nroTropa,  this.precio, this.idInventario)
        .subscribe(res=>{
       
          this.flag = false;
          this.flag1 = false;
          this.getTemp();
          this.ruta.navigate(['ventas/reportes']);
          setTimeout(()=>{
            this.ruta.navigate(['ventas']);

          },50);
          // console.log(res)
        })

      }

  cambio1:boolean=false;
      temp1(forma:NgForm){
   this.cambio1 = true;
        // this.medias = forma.value.kiloMedia;
        this.cuarto = forma.value.cuartos.split('/');
        this.pesoCuarto = this.cuarto[0];
        this.idCuarto = this.cuarto[1];
        this.descripcion = this.cuarto[2];
        this.precio = forma.value.precio;
        // this.idInventario = forma.value.idInventario;
       if (this.pesoCuarto <= 0) {
           alert('El cuartos no tiene peso');
           this.cambio1= false;
       }else{


         this.serviceInv.temporal(this.pesoCuarto, this.idCuarto, this.descripcion, this.precio)
         .subscribe(()=>{
           this.getTemp1();
           this.flag = false;
           this.flag1 = false;
           this.ruta.navigate(['ventas/reportes']);
           setTimeout(()=>{
             this.ruta.navigate(['ventas']);

           },50);
           // console.log(res)
         })  


       }
      }


loaders:boolean=false;
temporal:any
      getTemp(){
        this.serviceInv.getTemp()
        .subscribe(res=>{
   
       
          this.loaders = true;
          this.temporal = res;
       
          
        })
      }

totales:any=0;
dataTotal:any;
      getTotalTemp(){
        this.serviceInv.getTotalTemp()
        .subscribe(res=>{
         this.dataTotal = res;
          if(  this.dataTotal[0].total == null){
            this.totales = 0;
          }else{

            this.totales= parseFloat(  this.dataTotal[0].total);
            console.log(this.totales)
              this.da();
          }

        })
      }

      borra:boolean = false;
      borrarItem(idTemp:any, descripcion:any,peso:any,  idCuarteo:any){
        this.borra = true;
        this.serviceInv.borrarTempId(idTemp, descripcion, peso, idCuarteo)
        .subscribe(()=>{
          this.borra = false;
          this.ruta.navigate(['ventas/reportes']);
          setTimeout(()=>{
            this.ruta.navigate(['ventas']);

          },50);
          this.getTemp();
          this.getTotalTemp();
        })
      }


      temporal1:any
        te1:boolean = false;
            getTemp1(){
              this.te1 = true;
              this.serviceInv.getTemp1()
              .subscribe(res=>{
              // this.getTemp();
                this.temporal1 = res;
               

              })
            }
totales1:any=0;
toR:any=[];
getTotalTemp1(){
  this.serviceInv.getTotalTemp1()
  .subscribe(res=>{
    this.toR = res;
    for (let i = 0; i <  this.toR.length; i++) {
      const total =  this.toR[i].total;
      
      if(total == null){
        this.totales1 = 0;
      }else{
        this.totales1= parseFloat(total);
  
          // console.log(this.totales1)
        this.da();
      }
    }

  })
}
            su:number=0;
            da(){
              this.su= this.totales+this.totales1;
              //  console.log(this.su)
            }
         
            borr:boolean = false;
            borrarItem1(idInventario:any){
              this.borr = true;
              this.serviceInv.borrarTempId1(idInventario)
              .subscribe(()=>{
                this.borr = false;
                this.ruta.navigate(['ventas/reportes']);
                setTimeout(()=>{
                  this.ruta.navigate(['ventas']);

                },50);
                this.getTemp();
                this.getTotalTemp();
                this.getTotalTemp1()
                this.getTemp1()
              })
            }

             cli:any;
             idCli:any
             nroFactura:any
             to:any;
             admin:any;
             fechaVenta:any;
             boton:boolean=false;
            vender(forma:NgForm, nombreCliente:any){

              // return console.log(forma.value);
              
              this.boton=true;
              this.to = forma.value.su;
              this.fechaVenta= forma.value.fechaVenta;
             
            //  let a = confirm('Esta seguro de facturarle al cliente ' + nombreCliente);
            if (this.to <= 0 ) {
               alert('nada en el carrito'); 
            }else{

              let a = $('#confirm').modal('show');
              $('#confirm').appendTo("body")
              this.admin = localStorage.getItem('idAdmin');
            }

            }

            si(forma:NgForm){
              this.boton = false;
              this.cli = forma.value.nombreCliente;
              this.idCli = forma.value.idCliente;
              this.nroFactura = forma.value.fac;
              this.to = forma.value.su;
             let a =  this.serviceInv.venta(this.idCli ,this.nroFactura, this.to, this.admin, this.fechaVenta)
              .subscribe(res=>{

                if (res == 'success') {
                  
                  this.ruta.navigate(['ventas/facturas']);
                } else {
                  alert('Venta no generada.');
                  location.reload();
                }
                
              })
              setTimeout(()=>{a.unsubscribe()},2000)
            }

  fac:any;
  fac1:any;
     getFactura(){
       this.serviceInv.getFactura()
       .subscribe(res=>{
         this.fac = res;
        this.fac1 = this.fac[0].total;
       })
     }
     

  
}
