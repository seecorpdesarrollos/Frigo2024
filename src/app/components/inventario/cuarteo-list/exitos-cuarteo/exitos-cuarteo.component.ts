import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-exitos-cuarteo',
  templateUrl: './exitos-cuarteo.component.html',
  styles: []
})
export class ExitosCuarteoComponent implements OnInit {

  constructor( private ruta:Router,  private parametro:ActivatedRoute) { }

  ngOnInit() {
  this.exitos();
  }
  id:any = this.parametro.snapshot.params['id'];
  dato:boolean=false;
  datos:boolean=false;
  exitos(){

   if(this.id == "eliminar"){
      this.dato=true;
    }
    if(this.id== 'add'){
      this.datos = true;
    }
  }
  back(){
    this.ruta.navigate(['../cuerteo']);
  }
}
