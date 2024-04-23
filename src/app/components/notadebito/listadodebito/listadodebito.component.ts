import { Component, OnInit } from '@angular/core';
import { NotasService } from '../../../servicios/notas.service';
import { ClientesService } from '../../../servicios/clientes.service';

@Component({
  selector: 'app-listadodebito',
  templateUrl: './listadodebito.component.html',
  styles: []
})
export class ListadodebitoComponent implements OnInit {

  constructor( 
    private notas:NotasService,
    private service:ClientesService,

    ) { }

 
  ngOnInit() {
    this.getNotaDebito();
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

 this.notas.getnotaDebitoId(this.idCliente)
 .subscribe(data=>{ 
 
   if (data == 'error') {
     alert('No hat notas de crédito, del cliente seleccionada.');
     this.desde = 0;
     this.hasta = 10;
     this.getNotaDebito();
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
this.getNotaDebito();
}

desde=0;
hasta=10;
finData:boolean=false;
madData:any;
mas(){
  this.desde +=10;

  this.notas.getNotaDebito(this.desde,this.hasta)
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



  loader:boolean = false;
  inventario:any;
  total:any=0;
   public data: any;
   public filterQuery = "";
   public rowsOnPage = 5;
  nada:boolean=false;
getNotaDebito(){
       this.notas.getNotaDebito(this.desde,this.hasta)
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


}
