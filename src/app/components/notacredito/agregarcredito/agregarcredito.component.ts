import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../servicios/clientes.service';
import { NgForm } from '@angular/forms';
import { NotasService } from '../../../servicios/notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregarcredito',
  templateUrl: './agregarcredito.component.html',
  styles: []
})
export class AgregarcreditoComponent implements OnInit {

  constructor( 
    private service:ClientesService,
    private notas:NotasService,
    private ruta:Router
    ) { }

  ngOnInit() {
    this.getClientes();  
  }



 toggle1:boolean=false;
 dataToggle1(){
   this.toggle1 =true;
 
 }
 
 
 
 nombreCliente:any;
idCliente:any
  select(value:any){
 
    this.nombreCliente = value.nombreCliente;
    this.idCliente = value.idCliente;
    this.toggle1 =false;
   //  console.log(this.nroTropa);
    
  }


  datas:any;
  getClientes(){
    this.service.getClientes()
    .subscribe(res=>{
      this.datas= res;
      // console.log(this.datas)
    })
  }

 


   descripcionCredito:any;
   cantidadCredito:any;
   importeCredito:any;
   fechaCredito:any;
   cambio:boolean= false;
   totalCredito:any;
  agregarCre(forma:NgForm){
    this.descripcionCredito = forma.value.descripcionCredito;
    this.cantidadCredito = forma.value.cantidadCredito;
    this.importeCredito = forma.value.importeCredito;
    this.idCliente = forma.value.idCliente;
    this.fechaCredito = forma.value.fechaCredito;
    
    this.notas.addNotaCredito(
      this.descripcionCredito,this.cantidadCredito,this.importeCredito,
      this.idCliente, this.fechaCredito
    ).subscribe(res=>{
      

      this.cambio = true;
      if (res == "noSaldo") {
        alert('El cliente no tiene saldos pendiente para generar una nota de crédito');
      }else{
        setTimeout(()=>{
          this.ruta.navigate(['/notaCredito/listadoCredito']);
          
        }, 2000)
        
      }
      
    })
    
  }
  

  mostrarTotal:boolean= false
  totalesCredito(forma:NgForm){
    
    this.cantidadCredito = forma.value.cantidadCredito;
    this.importeCredito = forma.value.importeCredito;
    this.totalCredito = this.cantidadCredito* this.importeCredito
    
    if (this.totalCredito >0 ) {
      
      this.mostrarTotal = true
    } else {
      this.mostrarTotal = false;
      
    }
  }
  
  
}

