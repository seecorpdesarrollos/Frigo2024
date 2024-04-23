import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exitos-vendedores',
  templateUrl: './exitos-vendedores.component.html',
  styles: []
})
export class ExitosVendedoresComponent implements OnInit {

  constructor(private ruta:Router,  private parametro:ActivatedRoute) { }

  ngOnInit() {
  this.exitos();
  }
  id:any = this.parametro.snapshot.params['id'];
  dato:boolean=false;
  datos:boolean=false;
  bajas:boolean=false;
  altas:boolean=false;
  exitos(){

 if(this.id == "editar"){
      this.dato=true;
    }if(this.id == "error"){
       this.datos = true;
    }if(this.id == "baja"){
        this.bajas=true;
    }
    if(this.id == "alta"){
        this.altas=true;
    }
   }

   back(){
     this.ruta.navigate(['vendedores']);
   }

}
