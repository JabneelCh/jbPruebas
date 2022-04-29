import { Component, OnInit } from '@angular/core';
import { MatCardModule }  from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  historyText ='Softweed nace a raiz de la necesidad de proveer soluciones Informaticas de diseño y administración de Sistemas ERP para pequeñas y medianas empresas de la región.';
  longText= 'Somos una enmpresa de TI, que ofrece soluciones tecnologicas de diseño de sistemas y control ERP enfocados en optimizar el uso de recursos de nuestros clientes de forma creativa y flexible de acuerdo a sus necesidades.';

  constructor(public dialogRef:MatDialog) { }
  ngOnInit(): void {
  }

  openDialog(){
    const dialogRef = this.dialogRef.open(DialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      console.log(`Dialog result: ${result}`);
    });
  }
  }
 
 



 


