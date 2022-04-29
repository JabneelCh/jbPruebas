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

import { DialogComponent } from './Components/dialog/dialog.component';
import { HeaderComponent } from './Components/header/header.component';
import { TicketComponent } from './Components/ticket/ticket.component';
import { NuevoProductoComponent } from './Components/nuevo-producto/nuevo-producto.component';
import { AboutComponent } from './Components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DialogComponent,
    HeaderComponent,
    TicketComponent,
    NuevoProductoComponent
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
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
