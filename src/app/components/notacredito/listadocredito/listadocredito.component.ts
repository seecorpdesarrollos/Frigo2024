import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../../servicios/notas.service';
import { ClientesService } from '../../../servicios/clientes.service';


declare var $:any;
@Component({
  selector: 'app-listadocredito',
  templateUrl: './listadocredito.component.html',
  styles: []
})
export class ListadocreditoComponent implements OnInit {

  constructor( 
    private notas:NotasService,
    private service:ClientesService,
     ) { }

  ngOnInit() {
    this.getNotaCredito();
    this.getClientes();
  }

  datas:any;
    getClientes(){
      this.service.getClientes()
      .subscribe(res=>{
        this.datas= res;
        // console.log(this.datas)
      })
    }


  toggle1:boolean=false;
  dataToggle1(){
    this.toggle1 =true;
  
  }
  pro:boolean = false;
  nombreCliente:any;
idCliente:any
 selectCli(value:any){

   this.nombreCliente = value.nombreCliente;
   this.idCliente = value.idCliente;
   this.toggle1 =false;
   this.pro = true;

   this.notas.getNotaCreditoId(this.idCliente)
   .subscribe(data=>{ 
   
     if (data == 'error') {
       alert('No hat notas de crédito, del cliente seleccionada.');
       this.desde = 0;
       this.hasta = 10;
       this.getNotaCredito();
       this.nombreCliente=null;
    } else {
     this.data = data;
     
   }
   });
 }

 reset(){
  this.nombreCliente=null;
  this.filterQuery = '';
  this.desde = 0;
  this.hasta = 10;
  this.getNotaCredito();
}


  


  loader:boolean = false;
  inventario:any;
  total:any=0;
   public data: any;
   public filterQuery = "";
   public rowsOnPage = 5;
  nada:boolean=false;
  getNotaCredito(){
       this.notas.getNotaCredito(this.desde,this.hasta)
      .subscribe(res=>{
        this.loader = true;
        this.data= res;
        // console.log(this.data);
        
         if(this.data == undefined){
           this.nada= false;
         }else{
           this.nada =true;
         }
      })
    }

    
    desde=0;
    hasta=10;
    finData:boolean=false;
    madData:any;
    mas(){
      this.desde +=10;

      this.notas.getNotaCredito(this.desde,this.hasta)
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


    public  idNotaCredito:any;
    public  totalCredito:any;
    eliminar(idNotaCredito:any , idCliente:any, totalCredito:any){

     $('#eliminar').modal('show');
     $('#eliminar').appendTo("body");
     this.idNotaCredito = idNotaCredito;
     this.idCliente = idCliente;
     this.totalCredito = totalCredito;
     
     
    }
    
   

    eliminarNotaCredito(){
      // console.log(this.idNotaCredito);
      // console.log(this.idCliente);
      // console.log(this.totalCredito);
      
      
      this.notas.deleteNotaCredito(this.idNotaCredito, this.idCliente, this.totalCredito)
      .subscribe(res=>{
        // console.log(res);
        this.getNotaCredito();
        
      })
      $('#eliminar').modal('hide');
      
    }


}
