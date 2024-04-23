import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../servicios/login.service';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.component.html',
  styles: []
})
export class SalirComponent implements OnInit {

  constructor(
    private rura:Router,
    private servicio:LoginService,
  ) { }

  ngOnInit() {
    this.salir();
  }



  idAdmin:any;
  salir(){

    this.idAdmin = localStorage.getItem('idAdmin');

  //  this.servicio.updateUsuario(this.idAdmin)
  //  .subscribe(res=>{
  //  })
   localStorage.removeItem('nombreAdmin' );
   localStorage.removeItem('idAdmin' );
   localStorage.removeItem('rol' );
   localStorage.removeItem('fechaCreado');
   this.rura.navigate(['/login']);
   location.reload();
  }

}
