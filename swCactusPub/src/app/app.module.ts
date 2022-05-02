import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { DialogComponent } from './Components/dialog/dialog.component';
import { HeaderComponent } from './Components/header/header.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { NuevoProductoComponent } from './Components/nuevo-producto/nuevo-producto.component';
import { AboutComponent } from './Components/about/about.component';
import { NuevoUsuarioComponent } from './Components/nuevo-usuario/nuevo-usuario.component';
import { NuevoClienteComponent } from './Components/nuevo-cliente/nuevo-cliente.component';
import { NuevoProveedorComponent } from './Components/nuevo-proveedor/nuevo-proveedor.component';
import { NuevoDescuentoComponent } from './Components/nuevo-descuento/nuevo-descuento.component';
import { NuevaFamiliaComponent } from './Components/nueva-familia/nueva-familia.component';
import { NuevaSubfamiliaComponent } from './Components/nueva-subfamilia/nueva-subfamilia.component';
import { ConsultarProductoComponent } from './Components/consultar-producto/consultar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DialogComponent,
    HeaderComponent,
    TicketComponent,
    NuevoProductoComponent,
    NuevoUsuarioComponent,
    NuevoClienteComponent,
    NuevoProveedorComponent,
    NuevoDescuentoComponent,
    NuevaFamiliaComponent,
    NuevaSubfamiliaComponent,
    ConsultarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatCardModule, 
    MatDialogModule, 
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatListModule, 
    FlexLayoutModule,
    MatSelectModule,
    MatOptionModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
