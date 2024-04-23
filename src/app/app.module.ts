import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import {DataTableModule} from "angular2-datatable";

import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

// rutas
 // import {APP_ROUTING} from './app.router';
 import {APP_ROUTING} from './app.router';

 // guard
 import {LoginGuard} from './login.guard';
 import {LogoutGuard} from './logout.guard';
// servicios
import {LoginService} from './servicios/login.service';
import {ProductosService} from './servicios/productos.service';
import {InventarioService} from './servicios/inventario.service';
import {VendedoresService} from './servicios/vendedores.service';
import {ClientesService} from './servicios/clientes.service';


import { CabezeraComponent } from './components/menu/cabezera.component';
import { SalirComponent } from './components/login/salir.component';
import { RobotComponent } from './components/login/robot.component';
import { ListadoComponent } from './components/productos/listado/listado.component';
import { AgregarComponent } from './components/productos/agregar/agregar.component';
import { EditarComponent } from './components/productos/editar/editar.component';
import { ExitosComponent } from './components/productos/exitos/exitos.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ListaInvComponent } from './components/inventario/lista-inv/lista-inv.component';
import { AgregarInvComponent } from './components/inventario/agregar-inv/agregar-inv.component';
import { EditarInvComponent } from './components/inventario/editar-inv/editar-inv.component';
import {ExitosInvComponent} from './components/inventario/exitos-inv/exitos-inv.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { ListadoVendedoresComponent } from './components/vendedores/listado-vendedores/listado-vendedores.component';
import { AgregarVendedoresComponent } from './components/vendedores/agregar-vendedores/agregar-vendedores.component';
import { EditarVendedoresComponent } from './components/vendedores/editar-vendedores/editar-vendedores.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListadoClientesComponent } from './components/clientes/listado-clientes/listado-clientes.component';
import { AgregarClientesComponent } from './components/clientes/agregar-clientes/agregar-clientes.component';
import { EditarClientesComponent } from './components/clientes/editar-clientes/editar-clientes.component';
import { ExitosVendedoresComponent } from './components/vendedores/exitos-vendedores/exitos-vendedores.component';
import { InactivosVendedoresComponent } from './components/vendedores/inactivos-vendedores/inactivos-vendedores.component';
import { ExitosClientesComponent } from './components/clientes/exitos-clientes/exitos-clientes.component';
import { InactivosClientesComponent } from './components/clientes/inactivos-clientes/inactivos-clientes.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { VentasVComponent } from './components/ventas/ventas/ventas.component';
import { CarritoComponent } from './components/ventas/carrito/carrito.component';
import { FacturasComponent } from './components/ventas/facturas/facturas.component';
import { CuarteoComponent } from './components/inventario/cuarteo/cuarteo.component';
import { CuarteoListComponent } from './components/inventario/cuarteo-list/cuarteo-list.component';
import { ExitosCuarteoComponent } from './components/inventario/cuarteo-list/exitos-cuarteo/exitos-cuarteo.component';
import { AgregarCuarteoComponent } from './components/inventario/agregar-cuarteo/agregar-cuarteo.component';
import { InventarioCuarteoComponent } from './components/inventario/inventario-cuarteo/inventario-cuarteo.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import {ListadoCuentasComponent} from './components/cuentas/listado/listado.component';
import { ListadoSaldosComponent } from './components/cuentas/listado-saldos/listado-saldos.component';
import { CuentasService } from './servicios/cuentas.service';
import { CobrosComponent } from './components/cuentas/cobros/cobros.component';
import { ListaPagosComponent } from './components/cuentas/lista-pagos/lista-pagos.component';
import { ConsultasService } from './servicios/consultas.service';
import { FechasComponent } from './components/ventas/carrito/fechas.component';
import { TropasComponent } from './components/ventas/carrito/tropas.component';
import { ClientesReportesComponent } from './components/ventas/carrito/clientes-reportes.component';
import { AdminComponent } from './components/admin/admin.component';
import { SuccessComponent } from './components/admin/success.component';
import { NotacreditoComponent } from './components/notacredito/notacredito.component';
import { NotadebitoComponent } from './components/notadebito/notadebito.component';
import { AgregardebitoComponent } from './components/notadebito/agregardebito/agregardebito.component';
import { EditardebitoComponent } from './components/notadebito/editardebito/editardebito.component';
import { AgregarcreditoComponent } from './components/notacredito/agregarcredito/agregarcredito.component';
import { EditarcreditoComponent } from './components/notacredito/editarcredito/editarcredito.component';
import { ListadocreditoComponent } from './components/notacredito/listadocredito/listadocredito.component';
import { ListadodebitoComponent } from './components/notadebito/listadodebito/listadodebito.component';
import { NotasService } from './servicios/notas.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ProductosComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    CabezeraComponent,
    SalirComponent,
    RobotComponent,
    ListadoComponent,
    AgregarComponent,
    EditarComponent,
    ExitosComponent,
    InventarioComponent,
    ListaInvComponent,
    AgregarInvComponent,
    EditarInvComponent,
    ExitosInvComponent,
    DataFilterPipe,
    VendedoresComponent,
    ListadoVendedoresComponent,
    AgregarVendedoresComponent,
    EditarVendedoresComponent,
    ClientesComponent,
    ListadoClientesComponent,
    AgregarClientesComponent,
    EditarClientesComponent,
    ExitosVendedoresComponent,
    InactivosVendedoresComponent,
    ExitosClientesComponent,
    InactivosClientesComponent,
    VentasComponent,
    VentasVComponent,
    CarritoComponent,
    FacturasComponent,
    CuarteoComponent,
    CuarteoListComponent,
    ExitosCuarteoComponent,
    AgregarCuarteoComponent,
    InventarioCuarteoComponent,
    CuentasComponent,
    ListadoCuentasComponent,
    ListadoSaldosComponent,
    CobrosComponent,
    ListaPagosComponent,
    FechasComponent,
    TropasComponent,
    ClientesReportesComponent,
    AdminComponent,
    SuccessComponent,
    NotacreditoComponent,
    NotadebitoComponent,
    AgregardebitoComponent,
    EditardebitoComponent,
    AgregarcreditoComponent,
    ListadocreditoComponent,
    ListadodebitoComponent,
    EditarcreditoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTING,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
   LoginGuard,
   LogoutGuard,
   LoginService,
   ProductosService,
   InventarioService,
   VendedoresService,
   ClientesService,
   CuentasService,
   ConsultasService,
   NotasService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ],
})
export class AppModule { }
