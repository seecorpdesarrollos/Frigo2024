import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../servicios/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: []
})
export class MenuComponent implements OnInit {

  constructor( private servi:LoginService) {
    // this.datosAdmin();
    //       setInterval(() => {
    //           this.datosAdmin();
    //         }, 1000);
   }

  ngOnInit(){
  this.datosAdmin();
   }

  nombreAdmin:any;
  rol:any;
  fechaCreado:any;
  idAdmin:any;

  datosAdmin(){
    this.nombreAdmin = localStorage.getItem('nombreAdmin');
    this.rol = localStorage.getItem('rol');
    if (this.rol == 'A') {
     
        this.rol = 'Administrador';
    }else{
      this.rol = 'Usuario';
    

    }
    this.fechaCreado = localStorage.getItem('fechaCreado');
    this.idAdmin = localStorage.getItem('idAdmin');

    this.servi.getUsuarioActual(this.idAdmin)
    .subscribe(()=>{
     // console.log(res);
    });

  }

}
