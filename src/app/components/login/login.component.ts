import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../../servicios/login.service';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor( private ruta:Router , private servicio:LoginService ) { }

  ngOnInit() {
  }


  nombreAdmin:any;
  password:any;
  error:boolean = false;
  mostrarError:string='';
  loading:boolean = false;
  intentos:number = 0;
  maximosIntentos:string='';
  loader:boolean=false;
  gt:any=[];
  ingresar(login:NgForm){

    this.nombreAdmin = login.value.nombreAdmin;
    this.password = login.value.password;
   this.servicio.getUsuario(this.nombreAdmin, this.password)
   .subscribe( res =>{
    console.log(res);
    this.gt = res;
     this.loader = true;
      if (res !== 'error' ) {
          this.loading = true;
          this.error = false;
          for (let i = 0; i <   this.gt.length; i++) {
          
            localStorage.setItem('nombreAdmin' ,this.nombreAdmin);
            localStorage.setItem('idAdmin' ,this.gt[i].idAdmin);
            localStorage.setItem('rol' ,this.gt[i].rol);
            localStorage.setItem('fechaCreado' ,this.gt[i].fechaCreado);
            
          }

          setTimeout(()=>{
             this.ruta.navigate(['principal'])
          }, 3500)
      }else{
        this.loading = false;
        this.error = true;
        this.mostrarError = "Los datos ingresados no son correctos";
        this.intentos = this.intentos +1;
           if (this.intentos >= 4) {
              // this.ruta.navigate(['/robot']);
              // alert('ssrdtfgjh');
            return  $('.modal').modal('show')
           }
      }
   })

  }

}
