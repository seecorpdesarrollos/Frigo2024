import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../../servicios/login.service';
declare var $:any;
@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styles: []
})
export class CabezeraComponent implements OnInit {

  constructor(
    private rura:Router,
    private servicio:LoginService,
  ) { }

  ngOnInit() {

    this.admin();
  }



  role:any
  public cabezera:boolean=false;
  admin(){
   this.role = localStorage.getItem('rol');

      if (this.role == 'A') {
        this.cabezera = true;
      }else{
        this.cabezera= false;
      }
      // console.log(this.cabezera);
  }
  

  panel(){
    $(document).ready(function(){

    // $('#toggle-btn').on('click', function (e) {
        // e.preventDefault();
        $().toggleClass('active');

        $('.side-navbar').toggleClass('shrinked');
        $('.content-inner').toggleClass('active');
        $(document).trigger('sidebarChanged');

        if ($(window).outerWidth() > 1183) {
            if ($('#toggle-btn').hasClass('active')) {
                $('.navbar-header .brand-small').hide();
                $('.navbar-header .brand-big').show();
            } else {
                $('.navbar-header .brand-small').show();
                $('.navbar-header .brand-big').hide();
            }
        }

        if ($(window).outerWidth() < 1183) {
            $('.navbar-header .brand-small').show();
        }
    });

  // });
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
   // location.reload();
  }

}
