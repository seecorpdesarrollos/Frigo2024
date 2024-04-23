import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../../servicios/clientes.service';
import { NgForm } from '@angular/forms';
import { NotasService } from '../../../servicios/notas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editardebito',
  templateUrl: './editardebito.component.html',
  styles: []
})
export class EditardebitoComponent implements OnInit {


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

 


   descripcionDebito:any;
   cantidadDebito:any;
   importeDebito:any;
   
   public totalDebito:any;
   cambio:boolean=false;
   totalCredito:any;
   fechaDebito:any;
  agregarDeb(forma:NgForm){
    this.descripcionDebito = forma.value.descripcionDebito;
    this.cantidadDebito = forma.value.cantidadDebito;
    this.importeDebito = forma.value.importeDebito;
    
    this.idCliente = forma.value.idCliente;
    this.fechaDebito = forma.value.fechaDebito;
       
    this.notas.addNotaDebitoSinCheque(
      this.descripcionDebito,this.cantidadDebito,this.importeDebito, this.idCliente, this.fechaDebito
    ).subscribe(res=>{
      this.cambio = true;
      setTimeout(()=>{
        
        this.ruta.navigate(['notaDebito/listadoDebito']);
        
      }, 2000)
        
         
      })
     
  }

  mostrarTotal:boolean= false
  totalesCredito(forma:NgForm){
    
    this.cantidadDebito = forma.value.cantidadDebito;
    this.importeDebito = forma.value.importeDebito;
    this.totalCredito = this.cantidadDebito* this.importeDebito
    
    if (this.totalCredito >0 ) {
      
      this.mostrarTotal = true
    } else {
      this.mostrarTotal = false;
      
    }
  }

}
