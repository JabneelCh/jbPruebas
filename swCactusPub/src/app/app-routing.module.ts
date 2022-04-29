import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { NuevoProductoComponent } from './Components/nuevo-producto/nuevo-producto.component';
import { TicketComponent } from './Components/ticket/ticket.component';

const routes: Routes = [
  { path:"about", component:AboutComponent },
  { path:"nuevoProducto", component:NuevoProductoComponent },
  { path:"pruebasVariosComp", component:TicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
