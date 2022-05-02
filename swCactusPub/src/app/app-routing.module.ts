import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { NuevoProductoComponent } from './Components/nuevo-producto/nuevo-producto.component';
import { NuevoProveedorComponent } from './Components/nuevo-proveedor/nuevo-proveedor.component';
import { NuevoUsuarioComponent } from './Components/nuevo-usuario/nuevo-usuario.component';
import { TicketComponent } from './Components/ticket/ticket.component';

const routes: Routes = [
  { path:"about", component:AboutComponent },
  { path:"nuevoProducto", component:NuevoProductoComponent },
  { path:"nuevoUsuario", component:NuevoUsuarioComponent }, 
  { path:"nuevoProveedor", component:NuevoProveedorComponent },
  { path:"pruebasVariosComp", component:TicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
