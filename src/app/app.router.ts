import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from './components/principal/principal.component';
import {ProductosComponent} from './components/productos/productos.component';
import {AgregarComponent} from './components/productos/agregar/agregar.component';
import {ListadoComponent} from './components/productos/listado/listado.component';
import {ExitosComponent} from './components/productos/exitos/exitos.component';
import {EditarComponent} from './components/productos/editar/editar.component';
import { LoginComponent } from './components/login/login.component';
import { SalirComponent } from './components/login/salir.component';
import { RobotComponent } from './components/login/robot.component';
import {InventarioComponent} from './components/inventario/inventario.component';
import {AgregarInvComponent} from './components/inventario/agregar-inv/agregar-inv.component';
import {EditarInvComponent} from './components/inventario/editar-inv/editar-inv.component';
import {ListaInvComponent} from './components/inventario/lista-inv/lista-inv.component';
import {ExitosInvComponent} from './components/inventario/exitos-inv/exitos-inv.component';
import {CuarteoComponent} from './components/inventario/cuarteo/cuarteo.component';
import {CuarteoListComponent} from './components/inventario/cuarteo-list/cuarteo-list.component';
import {ExitosCuarteoComponent} from './components/inventario/cuarteo-list/exitos-cuarteo/exitos-cuarteo.component';
import {AgregarCuarteoComponent} from './components/inventario/agregar-cuarteo/agregar-cuarteo.component';
import {InventarioCuarteoComponent} from './components/inventario/inventario-cuarteo/inventario-cuarteo.component';

import {VendedoresComponent} from './components/vendedores/vendedores.component';
import {ListadoVendedoresComponent} from './components/vendedores/listado-vendedores/listado-vendedores.component';
import {AgregarVendedoresComponent} from './components/vendedores/agregar-vendedores/agregar-vendedores.component';
import {EditarVendedoresComponent} from './components/vendedores/editar-vendedores/editar-vendedores.component';
import {ExitosVendedoresComponent} from './components/vendedores/exitos-vendedores/exitos-vendedores.component';
import {InactivosVendedoresComponent} from './components/vendedores/inactivos-vendedores/inactivos-vendedores.component';

// LoginGuard
import {LoginGuard} from './login.guard';
import {LogoutGuard} from './logout.guard';
// ventas
import { VentasComponent } from './components/ventas/ventas.component';
import { VentasVComponent } from './components/ventas/ventas/ventas.component';
import { CarritoComponent } from './components/ventas/carrito/carrito.component';
import { FacturasComponent } from './components/ventas/facturas/facturas.component';
// clientes
import { ClientesComponent } from './components/clientes/clientes.component';
import { ListadoClientesComponent } from './components/clientes/listado-clientes/listado-clientes.component';
import { ExitosClientesComponent } from './components/clientes/exitos-clientes/exitos-clientes.component';
import { AgregarClientesComponent } from './components/clientes/agregar-clientes/agregar-clientes.component';
import { EditarClientesComponent } from './components/clientes/editar-clientes/editar-clientes.component';
import { InactivosClientesComponent } from './components/clientes/inactivos-clientes/inactivos-clientes.component';


// cuentas
import {CuentasComponent} from './components/cuentas/cuentas.component';
import {ListadoCuentasComponent} from './components/cuentas/listado/listado.component';
import { ListadoSaldosComponent } from './components/cuentas/listado-saldos/listado-saldos.component';
import { CobrosComponent } from './components/cuentas/cobros/cobros.component';
import { ListaPagosComponent } from './components/cuentas/lista-pagos/lista-pagos.component';
import { ClientesReportesComponent } from './components/ventas/carrito/clientes-reportes.component';
import { FechasComponent } from './components/ventas/carrito/fechas.component';
import { TropasComponent } from './components/ventas/carrito/tropas.component';
import { AdminComponent } from './components/admin/admin.component';
import { SuccessComponent } from './components/admin/success.component';
import { NotacreditoComponent } from './components/notacredito/notacredito.component';
import { NotadebitoComponent } from './components/notadebito/notadebito.component';
import { ListadocreditoComponent } from './components/notacredito/listadocredito/listadocredito.component';
import { AgregarcreditoComponent } from './components/notacredito/agregarcredito/agregarcredito.component';
import { EditarcreditoComponent } from './components/notacredito/editarcredito/editarcredito.component';
import { ListadodebitoComponent } from './components/notadebito/listadodebito/listadodebito.component';
import { AgregardebitoComponent } from './components/notadebito/agregardebito/agregardebito.component';
import { EditardebitoComponent } from './components/notadebito/editardebito/editardebito.component';

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'principal', component: PrincipalComponent, canActivate:[LoginGuard] },
   { path: 'notaCredito', component: NotacreditoComponent, canActivate:[LoginGuard],
 children:[
  { path: 'listadoCredito', component: ListadocreditoComponent },
  { path: 'agregarCredito', component: AgregarcreditoComponent },
  { path: 'editarCredito/:idNotaCredito/:idCliente/:nombreCliente/:descripcionCredito/:cantidadCredito/:importeCredito/:totalCredito', component: EditarcreditoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'listadoCredito'}
 ]

},
  { path: 'notaDebito', component: NotadebitoComponent, canActivate:[LoginGuard],
children:[
  { path: 'listadoDebito', component: ListadodebitoComponent },
  { path: 'agregarDebito', component: AgregardebitoComponent },
  { path: 'editarDebito', component: EditardebitoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'listadoDebito'}
]
},
  { path: 'admin', component: AdminComponent, canActivate:[LoginGuard], },
  { path: 'success', component: SuccessComponent, canActivate:[LoginGuard] },
  { path: 'cuentas', component: CuentasComponent, canActivate:[LoginGuard],
  children:[
    { path: 'listadoCuentas', component: ListadoCuentasComponent },
    { path: 'listaPagos', component: ListaPagosComponent },
    { path: 'cobros', component: CobrosComponent },
    { path: 'listadoSaldos', component: ListadoSaldosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'listadoCuentas'}
  ]
 },
  { path: 'ventas', component: VentasComponent, canActivate:[LoginGuard],
   children:[
    { path: 'ventas1', component: VentasVComponent },
    { path: 'reportes', component: CarritoComponent,
    children:[

      { path: 'reportesCli', component: ClientesReportesComponent },
      { path: 'reportesFechas', component: FechasComponent },
      { path: 'reportesTropas', component: TropasComponent },   
      { path: '**', pathMatch: 'full', redirectTo: 'reportesCli'}
    ]
  
  }, 
    { path: 'facturas', component: FacturasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'ventas1'}
   ]
},
  { path: 'inventario', component: InventarioComponent, canActivate:[LoginGuard],
   children:[
     { path: 'listadoInv', component: ListaInvComponent },
     { path: 'exitosInv/:id', component: ExitosInvComponent },
     { path: 'agregarInv', component: AgregarInvComponent },
     { path: 'editarInv/:idInventario', component: EditarInvComponent },
     { path: '**', pathMatch: 'full', redirectTo: 'listadoInv'}
   ]
 },
 { path: 'cuarteo', component: CuarteoComponent, canActivate:[LoginGuard],
  children:[
    { path: 'cuarteoList', component: CuarteoListComponent },
    { path: 'inventarioCuerteo', component: InventarioCuarteoComponent },
   { path: 'cuarteoAdd', component: AgregarCuarteoComponent },
    { path: 'exitosCuarteo/:id', component: ExitosCuarteoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'cuarteoList'}
  ]
},
 { path: 'vendedores', component: VendedoresComponent, canActivate:[LoginGuard],
  children:[
    { path: 'listadoVen', component: ListadoVendedoresComponent },
    { path: 'exitosVen/:id', component: ExitosVendedoresComponent },
    { path: 'agregarVen', component: AgregarVendedoresComponent },
    { path: 'editarVen/:idVendedor', component: EditarVendedoresComponent },
    { path: 'venInactivos', component: InactivosVendedoresComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'listadoVen'}
  ]
},
{ path: 'clientes', component: ClientesComponent, canActivate:[LoginGuard],
children:[
  { path: 'listadoCli', component: ListadoClientesComponent },
  { path: 'exitosCli/:id', component: ExitosClientesComponent },
  { path: 'agregarCli', component: AgregarClientesComponent },
  { path: 'editarCli/:idCliente', component: EditarClientesComponent },
  { path: 'cliInactivos', component: InactivosClientesComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'listadoCli'}
]
},
  { path: 'productos', component: ProductosComponent, canActivate:[LoginGuard],
    children:[
      { path: 'listadoPro', component: ListadoComponent },
      { path: 'exitos/:id', component: ExitosComponent },
      { path: 'agregarPro', component: AgregarComponent },
      { path: 'editarPro/:idProductos', component: EditarComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'listadoPro'}
    ]
   },
  { path: 'salir', component: SalirComponent, canActivate:[LoginGuard] },
  { path: 'robot', component: RobotComponent, canActivate:[LoginGuard] },
  { path: '**', pathMatch: 'full', redirectTo: 'principal' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true});
