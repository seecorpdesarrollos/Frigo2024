import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editarcredito',
  templateUrl: './editarcredito.component.html',
  styles: []
})
export class EditarcreditoComponent implements OnInit {

  constructor( 
    private parametro:ActivatedRoute,
    private ruta:Router
  ) { }

  ngOnInit() {
    this.editar();
  }

  idNotaCredito = this.parametro.snapshot.params['idNotaCredito'];
  idCliente = this.parametro.snapshot.params['idCliente'];
  nombreCliente = this.parametro.snapshot.params['nombreCliente'];
  descripcionCredito = this.parametro.snapshot.params['descripcionCredito'];
  cantidadCredito = this.parametro.snapshot.params['cantidadCredito'];
  importeCredito = this.parametro.snapshot.params['importeCredito'];
  totalCredito = this.parametro.snapshot.params['totalCredito'];


  editar(){

    alert('idNota' + this.idNotaCredito);
    alert('idNota' + this.idCliente);
    alert('idNota' + this.nombreCliente);
    alert('idNota' + this.descripcionCredito);
    alert('idNota' + this.cantidadCredito);
    alert('idNota' + this.importeCredito);
    alert('idNota' + this.totalCredito);
  }
  

}
