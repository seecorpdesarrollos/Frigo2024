import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exitos',
  templateUrl: './exitos.component.html',
  styleUrls: ['./exitos.component.css']
})
export class ExitosComponent implements OnInit {

  constructor( private ruta:Router,  private parametro:ActivatedRoute) { }

  ngOnInit() {
  this.exitos();
  }
  id:any = this.parametro.snapshot.params['id'];
  dato:boolean=false;
  exitos(){
     if (this.id == 'borrar') {
      this.dato = true;
    }else{
      this.dato=false;
    }
   }
  back(){
    this.ruta.navigate(['../productos']);
  }

}
